<?php

class Article {
  public $title, $content;
  private $published = false;

  public function __construct($title, $content) {
    $this->title = $title; $this->content = $content;
  }

  public function publish() { $this->published = true; }

  public function isPublished() { return $this->published; }
}

$article1 = new Article('Article 1', 'Content 1');
$article2 = new Article('Article 2', 'Content 2');

$article1->publish();

echo 'article1->isPublished(): '; var_dump($article1->isPublished()); echo '<br />';
echo 'article2->isPublished(): '; var_dump($article2->isPublished()); echo '<br />';

