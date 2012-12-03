	<?php
		// Get the nav menu based on $menu_name (same as 'theme_location' or 'menu' arg to wp_nav_menu)
	    // This code based on wp_nav_menu's code to get Menu ID from menu slug
	
	    $menu_name = 'custom_menu_slug';
	
	    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {
		$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
	
		$menu_items = wp_get_nav_menu_items($menu->term_id);
	
		foreach ( (array) $menu_items as $key => $menu_item ) {
		    $title = $menu_item->title;
		    $url = $menu_item->url;
		    $menu_list .= '<a href="' . $url . '">' . $title . '</a>';
		}
	    } else {
		$menu_list = '<ul><li>Menu "' . $menu_name . '" not defined.</li></ul>';
	    }
	    // $menu_list now ready to output
	 ?>
	
	<footer class="row">
		<nav class="six columns centered panel">
			<?php wp_nav_menu( $menu_list ); ?>
		</nav>
	</footer>

	<!-- Included JS Files (Compressed) -->
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/foundation.min.js"></script>
	
	<!-- Initialize JS Plugins -->
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/app.js"></script>
</body>
</html>