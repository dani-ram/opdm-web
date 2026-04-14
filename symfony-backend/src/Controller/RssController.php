<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class RssController extends AbstractController
{
    #[Route('/api/rss', name: 'app_rss', methods: ['GET'])]
    public function rss(): JsonResponse
    {
      $client = HttpClient::create();
      $rss_url = 'https://feeds.ivoox.com/feed_fg_f11874151_filtro_1.xml';

    try{
      $response = $client->request('GET', $rss_url);
      $xmlContent = $response->getContent();
      $xml = simplexml_load_string($xmlContent, "SimpleXMLElement", LIBXML_NOCDATA);

      if(!$xml) {
        return new JsonResponse(['error' => 'No se pudo cargar el RSS'], 500);
      }


      $episodios = [];

      foreach ($xml->channel->item as $entry) {
        
        $audio = isset($entry->enclosure) ? (string) $entry->enclosure['url'] : null;
        $portada = isset($entry->children('itunes', true)->image)
        ? (string) $entry->children('itunes', true)->image->attributes()->href
        : (isset($xml->channel->children('itunes', true)->image)
        ? (string) $xml->channel->children('itunes', true)->image->attributes()->href
        : null);
        
        $episodios[] = [
            'title' => (string)$entry->title,
            'description' => (string)$entry->description,
            'link' => (string)$entry->link,
            'audio' => $audio,
            'pubDate' => (string)$entry->pubDate,
            'portada' => $portada ?: 'assets/default.png'
        ];
      }
      return new JsonResponse($episodios, 200);
    } catch (\Exception $e) {
      return new JsonResponse(['error' => 'Error al procesar el RSS: ' . $e->getMessage()], 500);
    }
  }
}
