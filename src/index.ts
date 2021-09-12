import System from "@smartface/native/device/system";
import type ListViewIndexAndroid from './listviewindex-Android';
import type ListViewIndexIOS from './listviewindex-iOS';

const ListViewIndex: typeof ListViewIndexIOS & typeof ListViewIndexAndroid = require(`./listviewindex-${System.OS}`);

export = ListViewIndex;