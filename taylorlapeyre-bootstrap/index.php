<?php get_header(); ?>

  <div id="blog-posts">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article class="row">
      <div class="span7">
        <a href="<?php echo get_permalink(); ?>"><h4><?php the_title(); ?></h4></a>
        <?php the_content('Continue Reading...'); ?>
        <a href="<?php echo get_permalink(); ?>"class="label label-info pull-right"><i class="icon-comment icon-white"></i></a>
      </div>
    </article>
<?php endwhile; ?>
  <?php the_bootstrap_content_nav( 'nav-below' ); ?>
<?php else: ?>
  <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
  </div>

<?php get_footer(); ?>