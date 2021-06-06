const Image = require("@smartface/native/ui/image");
const Page = require("@smartface/native/ui/page");
const extend = require("js-base/core/extend");
const Color = require("@smartface/native/ui/color");
const Label = require("@smartface/native/ui/label");
const FlexLayout = require("@smartface/native/ui/flexlayout");
const ListView = require("@smartface/native/ui/listview");
const ListViewItem = require("@smartface/native/ui/listviewitem");
const Font = require("@smartface/native/ui/font");
const TextAlignment = require("@smartface/native/ui/textalignment");
const ListviewIndex = require("sf-extension-listviewindex");

var Page1 = extend(Page)(function (_super) {
  _super(this, {
    onShow: function (params) {},
    onLoad: function () {
      var _headerData = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
      _headerData.push(Image.createFromFile("images://trash.png"));

      var _rowData = [];
      for (var i = 0; i < _headerData.length; i++) {
        _rowData.push([
          "#ff6c8f",
          "#ff85a2",
          "#ff9fb6",
          "#ffb8c9",
          "#ffd2dc",
          "#ffebf0",
        ]);
      }

      var dataArray = [];

      var headerIndex = [];

      function pushDataToArray(headerData, rowData) {
        for (var i = 0; i < headerData.length; i++) {
          dataArray.push({ isHeader: true, data: headerData[i] });
          headerIndex.push(dataArray.length - 1);
          for (var j = 0; j < rowData[i].length; j++) {
            dataArray.push({ isHeader: false, data: rowData[i][j] });
          }
        }
      }
      pushDataToArray(_headerData, _rowData);

      var myListView = new ListView({
        flexGrow: 1,
        marginLeft: 20,
        itemCount: dataArray.length,
      });

      this.layout.addChild(myListView);

      var listviewindex = new ListviewIndex();
      listviewindex.width = 20;

      listviewindex.indexItems = function () {
        return _headerData;
      };

      listviewindex.indexDidSelect = function (index) {
        myListView.scrollTo(headerIndex[index], false);
        return true; //haptic
      };

      listviewindex.reloadData();

      this.layout.addChild(listviewindex);

      // listviewindex.backgroundView.backgroundColor = Color.GREEN;
      // listviewindex.backgroundColor = Color.BLUE;
      // listviewindex.tintColor = Color.RED;
      // listviewindex.itemSpacing = 5;
      // listviewindex.font = Font.create("TimesNewRomanPS-BoldMT", 16);
      // listviewindex.indexInset = { top: 10, left: 0, bottom: 10, right: 0 };
      // listviewindex.indexOffset = { vertical: -2, horizontal: -2 };
      // listviewindex.listviewIndexMinimumWidth = 40;

      myListView.onRowCreate = function (type) {
        var myListViewItem = new ListViewItem();

        if (type == 1) {
          var myLabelTitle = new Label({
            flexGrow: 1,
            margin: 10,
          });
          myLabelTitle.textColor = Color.WHITE;
          myLabelTitle.borderRadius = 10;
          myLabelTitle.textAlignment = TextAlignment.MIDCENTER;
          myListViewItem.addChild(myLabelTitle);
          myListViewItem.myLabelTitle = myLabelTitle;
        } else {
          // Header
          var myLabelTitle = new Label({
            flexGrow: 1,
            margin: 10,
          });
          myLabelTitle.font = Font.create(Font.DEFAULT, 30, Font.BOLD);
          myLabelTitle.backgroundColor = Color.WHITE;
          myListViewItem.addChild(myLabelTitle);
          myListViewItem.myLabelTitle = myLabelTitle;
        }

        return myListViewItem;
      };

      myListView.onRowHeight = function (index) {
        if (dataArray[index].isHeader) {
          return 100;
        }
        return 70;
      };

      myListView.onRowBind = function (listViewItem, index) {
        var myLabelTitle = listViewItem.myLabelTitle;

        if (dataArray[index].isHeader) {
          myLabelTitle.text =
            typeof dataArray[index].data === "string"
              ? dataArray[index].data
              : "Image";
        } else {
          myLabelTitle.backgroundColor = Color.create(dataArray[index].data);
          myLabelTitle.text = dataArray[index].data;
        }
      };

      myListView.onRowType = function (index) {
        if (dataArray[index].isHeader) {
          return 2;
        } else {
          return 1;
        }
      };
    },
  });

  this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
});
module.exports = Page1;
