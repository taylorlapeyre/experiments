<?php get_header(); ?>

<div id="blog-posts">

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<article class="row">
	<div class="nine columns centered">
    <h4><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h4>
		<?php the_content('Read more'); ?>
    <h5><a href="<?php echo get_permalink(); ?>">Discuss This Post</a></h5>
	</div>
</article>
<?php endwhile; else: ?>
	<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>

</div>

<?php get_footer(); ?>
