<div class="post" id="article-<?php echo article_id(); ?>">
	<article class="row">
    <div class="span7">
      <h3><?php echo article_title(); ?></h3>
      <section class="content">
        <?php echo article_html(); ?>
      </section>
    </div>
	</article>
</section>

<section class="row footnote">
	<p class="muted"><em>This article is my <?php echo numeral(article_id()); ?> oldest. It is <?php echo count_words(article_html()); ?> words long. 
	<?php echo article_custom_field('attribution'); ?></em></p>
</section>
</div>