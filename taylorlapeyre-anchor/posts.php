<section class="blog-posts">

	<?php if(has_posts()): ?>
		<ul class="unstyled">
			<?php while(posts()): ?>
			<li>
				<a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>">
					<time datetime="<?php echo date(DATE_W3C, article_time()); ?>"><?php echo relative_time(article_time()); ?></time>
					<h3><?php echo article_title(); ?></h3>
				</a>
			</li>
			<?php endwhile; ?>
		</ul>

		<p><?php echo posts_prev(); ?> <?php echo posts_next(); ?></p>

	<?php else: ?>
		<p>Looks like I have some writing to do!</p>
	<?php endif; ?>

</section>