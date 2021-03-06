//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.

var huggle_context_core = 0;
var huggle_context_ui = 1;

var huggle_MessageBoxStyleNormal = 0; // OK
var huggle_MessageBoxStyleQuestion = 1; // Yes No
var huggle_MessageBoxStyleQuestionAbort = 2; // Yes No Cancel
var huggle_MessageBoxStyleWarning = 3; // OK (warning)
var huggle_MessageBoxStyleError = 4; // OK (error)

var huggle_ui_menu_system     = -1;
var huggle_ui_menu_user       = -2;
var huggle_ui_menu_page       = -3;
var huggle_ui_menu_tools      = -4;
var huggle_ui_menu_queue      = -5;
var huggle_ui_menu_han        = -6;
var huggle_ui_menu_goto       = -7;
var huggle_ui_menu_help       = -8;
var huggle_ui_menu_scripting  = -9;
var huggle_ui_menu_debug      = -10;

var huggle_ui_menuitem_exit = -1;

var huggle_api_action_clear_has_msg = 0;
var huggle_api_action_compare       = 1;
var huggle_api_action_query         = 2;
var huggle_api_action_login         = 3;
var huggle_api_action_logout        = 4;
var huggle_api_action_purge         = 5;
var huggle_api_action_rollback      = 6;
var huggle_api_action_delete        = 7;
var huggle_api_action_undelete      = 8;
var huggle_api_action_block         = 9;
var huggle_api_action_patrol        = 10;
var huggle_api_action_review        = 11;
var huggle_api_action_parse         = 12;
var huggle_api_action_protect       = 13;
var huggle_api_action_edit          = 14;
var huggle_api_action_unwatch       = 15;
var huggle_api_action_watch         = 16;
var huggle_api_action_custom        = 17;
