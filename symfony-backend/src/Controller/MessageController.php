<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;

final class MessageController extends AbstractController
{
    #[Route('/api/message', name:'api_message', methods: ['POST'])]
    public function sendMessage(Request $request, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $name = $data['name']??'';
        $email = $data['email']??'';
        $message = $data['message']??'';

        if(!$email || !$message || !$name){
            return new JsonResponse(['success' => false, 'message' => 'Datos incompletos'], 400);
        }

        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
            return new JsonResponse(['error' => 'Email no válido'], 400);
        }
        try{
            $adminEmail = (new Email())
            ->from($email)
            ->to('daniramirez1994@gmail.com')
            ->subject("Nuevo mensaje de $name")
            ->text("De: $name <$email>\n\nMensaje:\n$message");

            $mailer->send($adminEmail);

            $userEmail = (new Email())
            ->from('daniramirez1994@gmail.com')
            ->to($email)
            ->subject('Confirmación de tu mensaje ✅')
            ->text("Hola $name,\n\nHemos recibido tu mensaje y te responderemos pronto.\n\nTu mesnaje fue:\n\"$message\"\n\n- El equipo de OPDM Radio");

            $mailer->send($userEmail);

            return new JsonResponse(['success' => true, 'message' => 'Correo enviado correctamente']);
        } catch (\Exception $e) {
            return new JsonResponse(['success' => false, 'message' => $e->getMessage()], 500);
        }

         
    }
}
