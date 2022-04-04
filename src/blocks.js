const blocks = {
  rowStart: `[vc_row type="in_container" full_screen_row_position="middle"
  scene_position="center" text_color="dark" text_align="left"
  overlay_strength="0.3" shape_divider_position="bottom"]`,

  rowEnd: `[/vc_row]`,

  colStart: `[vc_column column_padding="no-extra-padding"
  column_padding_position="all" background_color_opacity="1"
  background_hover_color_opacity="1" column_link_target="_self"
  column_shadow="none" column_border_radius="none" width="1/3"
  tablet_width_inherit="default" tablet_text_alignment="default"
  phone_text_alignment="default" column_border_width="none"
  column_border_style="solid"]`,

  colEnd: `[/vc_column]`,

  btn: `[nectar_btn size="medium" open_new_tab="true"
  button_style="see-through-2" color_override="%(color)s"
  hover_color_override="%(color)s" hover_text_color_override="#ffffff"
  icon_family="none"
  url="%(url)s"
  el_class="--btn-force-full-width --force-uppercase"
  text="%(text)s"]`

};

export default blocks;
