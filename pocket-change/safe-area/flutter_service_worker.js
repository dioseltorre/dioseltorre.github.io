'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b586a951e3915d0d4ba3208ca62d6458",
"assets/assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/i18n/en.json": "22ce7355d635269fbb35038e9fe82a03",
"assets/assets/i18n/ja.json": "661956e445735522846a4e6948645737",
"assets/assets/i18n/partial/en.json": "7f2f1712c407574ed876534469a58f5b",
"assets/assets/i18n/partial/ja.json": "80b1e99e23b22032c4c103e9b30aef0e",
"assets/assets/icons/credit-card-back.svg": "a03e33e85c5e7a6c9b7f13ad057b696d",
"assets/assets/icons/credit-card-front.svg": "dfb4613bcbb7458f674c5e8e93e6c55a",
"assets/assets/icons/Logo.svg": "1a86c6768bebbdd120688fb949d9b6ca",
"assets/assets/icons/promote.svg": "988c3651892f01c86eae19e9fc7aa73d",
"assets/assets/icons/save_money.svg": "8655e7a281a77ac36a320e8c232da6a1",
"assets/assets/icons/scan_qrcode.svg": "f001866a0d11806c5e672229f9e14b7f",
"assets/assets/image/onboarding1.png": "5909f006a67417441de51f8726721c0a",
"assets/assets/image/onboarding2.png": "3f15aa6d1e558325f76498ad5c6ee829",
"assets/assets/image/onboarding3.png": "c3d961ff83735104cf7a520c73a86252",
"assets/assets/image/onboarding4.png": "daa1f60be77d773b0d4cd275c714bef0",
"assets/assets/json/manifest.dev.json": "e2efeab33e7750037a7e3df0fe40e340",
"assets/assets/lottiefiles/pokepay_complete.json": "f6b95e1d7603f26a054fdc32def6abc6",
"assets/FontManifest.json": "0e73a59b4da2305c10aae634617bd0f0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "addff6b722fc7818491e8a74402b4488",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/pays_design_system/assets/i18n/en.json": "c96cf4620e5c88dddef79169f4bb2ba2",
"assets/packages/pays_design_system/assets/i18n/ja.json": "223d6c92c2a98a803987b1522ad64379",
"assets/packages/pays_design_system/assets/images/svg/activity.svg": "2456bc0383dff6da70dcd0313ac0689b",
"assets/packages/pays_design_system/assets/images/svg/admin_user-1.svg": "48a4b77c279cf7ea9e643ab826e78f1d",
"assets/packages/pays_design_system/assets/images/svg/admin_user-2.svg": "184040cc305472fbd127ecaa0ccda0d7",
"assets/packages/pays_design_system/assets/images/svg/admin_user-3.svg": "0e6f2bdd8ba3dc6992bdea34ca4f8b28",
"assets/packages/pays_design_system/assets/images/svg/admin_user-4.svg": "592046f31b6ebc0a9a37911c6ae40a12",
"assets/packages/pays_design_system/assets/images/svg/airplay.svg": "8a8e2cf495edab6439cd65285c1abbe1",
"assets/packages/pays_design_system/assets/images/svg/alert-circle.svg": "403275a9ac69fc93154f334381e007a4",
"assets/packages/pays_design_system/assets/images/svg/alert-octagon.svg": "9dd880467b6ffba7f0f3e5996b2b61d4",
"assets/packages/pays_design_system/assets/images/svg/alert-triangle.svg": "fbf8288080433f84afa2e75478e94a93",
"assets/packages/pays_design_system/assets/images/svg/align-center.svg": "6475502ee745d8c411a1896ff1b9b5a0",
"assets/packages/pays_design_system/assets/images/svg/align-justify.svg": "c18ffd26deb333244927a00e8e883a41",
"assets/packages/pays_design_system/assets/images/svg/align-left.svg": "2423ca58976f9969ff36a277a91301bf",
"assets/packages/pays_design_system/assets/images/svg/align-right.svg": "5932fd3055b3645bc9d79b0da8afb1e3",
"assets/packages/pays_design_system/assets/images/svg/americanexpress-logo.svg": "be8e4891a401871993dd3c6617aa96ee",
"assets/packages/pays_design_system/assets/images/svg/anchor.svg": "716940d17b70d96db847c14ae3a0619f",
"assets/packages/pays_design_system/assets/images/svg/aperture.svg": "4e84b0db4e3bff4acd5b6970f7620c89",
"assets/packages/pays_design_system/assets/images/svg/archive.svg": "e6293ec7eb39b69c9de4fe30405873f6",
"assets/packages/pays_design_system/assets/images/svg/arrow-down-circle.svg": "2770cf6e70af0260d70937f594cd496a",
"assets/packages/pays_design_system/assets/images/svg/arrow-down-left.svg": "579d2e83d4ef720102b9bc58a5f33bab",
"assets/packages/pays_design_system/assets/images/svg/arrow-down-right.svg": "0627b617474f0966d6057c4247441538",
"assets/packages/pays_design_system/assets/images/svg/arrow-down.svg": "67bbe4970a7f0abd2ee3d8f7cdd9fd2c",
"assets/packages/pays_design_system/assets/images/svg/arrow-left-circle.svg": "8fc7b67971196af7c4f7b1b32d8143a6",
"assets/packages/pays_design_system/assets/images/svg/arrow-left.svg": "0bd995645cc10aeb65e838d49b5e0416",
"assets/packages/pays_design_system/assets/images/svg/arrow-right-circle.svg": "423f77413e7e39963a23a0fc90a81954",
"assets/packages/pays_design_system/assets/images/svg/arrow-right.svg": "6c9f5ace2a25d5feb3f00f50fc0d50d6",
"assets/packages/pays_design_system/assets/images/svg/arrow-up-circle.svg": "f952d2aadf2cf6bdfc81d85bfa2c9b6f",
"assets/packages/pays_design_system/assets/images/svg/arrow-up-left.svg": "5c7f07752bb5d4c4c9f04bbee3a49027",
"assets/packages/pays_design_system/assets/images/svg/arrow-up-right.svg": "246b7a5f064983dc406c7423dc5d9b92",
"assets/packages/pays_design_system/assets/images/svg/arrow-up.svg": "f486bb2902421ec3bd236d0a585a4ef7",
"assets/packages/pays_design_system/assets/images/svg/at-sign.svg": "b1f7a9f21f55c009330a4a7ddb362414",
"assets/packages/pays_design_system/assets/images/svg/award.svg": "552a556c5246b387e1ad4a14b1a06edb",
"assets/packages/pays_design_system/assets/images/svg/backspace.svg": "ad03dcade831bc15f26b4b7bb3b02182",
"assets/packages/pays_design_system/assets/images/svg/bar-chart-2.svg": "10768eb0effdb38fb2ed043cbcc44d75",
"assets/packages/pays_design_system/assets/images/svg/bar-chart.svg": "022a4d062285fd548e0db8a52d5c6c8c",
"assets/packages/pays_design_system/assets/images/svg/battery-charging.svg": "f1669fbfab745db4a281d09a0b7998f0",
"assets/packages/pays_design_system/assets/images/svg/battery.svg": "5d62bc5fbf71852b5eb8697e6ae6446d",
"assets/packages/pays_design_system/assets/images/svg/bell-off.svg": "ee1215572d40e3f77ab025b1f702a8d2",
"assets/packages/pays_design_system/assets/images/svg/bell.svg": "a5d431162baf4a2a335fc8109afee7c7",
"assets/packages/pays_design_system/assets/images/svg/bluetooth.svg": "e6b85c453cb927853c35ad783d6a6d01",
"assets/packages/pays_design_system/assets/images/svg/bold.svg": "81aa6e1858402e2840593c7a868acad5",
"assets/packages/pays_design_system/assets/images/svg/book-open.svg": "ee9b1b929ba9c40866d7ef5f6d73355b",
"assets/packages/pays_design_system/assets/images/svg/book.svg": "d373577ca4b439b0f888c1b1bc7543f1",
"assets/packages/pays_design_system/assets/images/svg/bookmark.svg": "2d6fa5a2ce13e4c213352fef8aa5c7ed",
"assets/packages/pays_design_system/assets/images/svg/box.svg": "cecbe966693241ba47e9ab762e92ba28",
"assets/packages/pays_design_system/assets/images/svg/briefcase.svg": "87eb2d523e6c63aaef8c95931d63d2c9",
"assets/packages/pays_design_system/assets/images/svg/calendar.svg": "30ecff8258273001a03962553ba91645",
"assets/packages/pays_design_system/assets/images/svg/camera-off.svg": "34f596a11e37695e8a5aab663cbc46a0",
"assets/packages/pays_design_system/assets/images/svg/camera.svg": "43f9258e84f1c5bcb1f93c6a55b93cf0",
"assets/packages/pays_design_system/assets/images/svg/campaign-1.svg": "4ea4c3e66d5060ce9df28a3b3141da79",
"assets/packages/pays_design_system/assets/images/svg/campaign-2.svg": "8cd3648726be0669c97015cdd115d744",
"assets/packages/pays_design_system/assets/images/svg/campaign-3.svg": "3cd898a3f4f6f1b5a96abcbb12b4e40a",
"assets/packages/pays_design_system/assets/images/svg/campaign-4.svg": "48cf6494b1808799af3bad15c305a339",
"assets/packages/pays_design_system/assets/images/svg/cast.svg": "8053becb7080394f9cb7fd9c964a0d1b",
"assets/packages/pays_design_system/assets/images/svg/check-circle.svg": "662cf1bc38bdc8f204be83aa49acb02f",
"assets/packages/pays_design_system/assets/images/svg/check-square.svg": "5719d84bd55d6712c74ec36b3b089b88",
"assets/packages/pays_design_system/assets/images/svg/check.svg": "a5ffae3e71b745e2ef4d5020392746e7",
"assets/packages/pays_design_system/assets/images/svg/chevron-down.svg": "c06ed81f1c5e14a8676023dc04059e72",
"assets/packages/pays_design_system/assets/images/svg/chevron-left.svg": "9e22bcbc37eb035fd249f89f69e92c5b",
"assets/packages/pays_design_system/assets/images/svg/chevron-right.svg": "acb60617b03e0186e1f47b408424f2fd",
"assets/packages/pays_design_system/assets/images/svg/chevron-up.svg": "2f06635e839044c8fded008dc4b758c8",
"assets/packages/pays_design_system/assets/images/svg/chevrons-down.svg": "f58161f71a577686e5553cb53f9f0835",
"assets/packages/pays_design_system/assets/images/svg/chevrons-left.svg": "366d0693a23ddf5e27c22566db15b521",
"assets/packages/pays_design_system/assets/images/svg/chevrons-right.svg": "898f0c18abf763b62d0e804516521e32",
"assets/packages/pays_design_system/assets/images/svg/chevrons-up.svg": "35e23e63024a18a71edcf698556ef8a3",
"assets/packages/pays_design_system/assets/images/svg/chrome.svg": "e5f569700f57d16f6304d18815acd1ab",
"assets/packages/pays_design_system/assets/images/svg/circle.svg": "6a63db6ceaeddd63ca83d0bf0a862805",
"assets/packages/pays_design_system/assets/images/svg/clipboard.svg": "41141b7d6c572cbec0c3870388d45ca2",
"assets/packages/pays_design_system/assets/images/svg/clock.svg": "561008414e78be28c757775738748626",
"assets/packages/pays_design_system/assets/images/svg/cloud-drizzle.svg": "e9e56692468d485c8fa46a21393d007c",
"assets/packages/pays_design_system/assets/images/svg/cloud-lightning.svg": "576d6fc699b839bab99e8052955d69d3",
"assets/packages/pays_design_system/assets/images/svg/cloud-off.svg": "f07c42463fcabcf61cc19a31d06d3734",
"assets/packages/pays_design_system/assets/images/svg/cloud-rain.svg": "84b68020a37efa111640f9c425e8af3b",
"assets/packages/pays_design_system/assets/images/svg/cloud-snow.svg": "bbbada061f5115c67962e9c0b3b18943",
"assets/packages/pays_design_system/assets/images/svg/cloud.svg": "319b3ba470bc7f770b9331c4dd8a1f14",
"assets/packages/pays_design_system/assets/images/svg/code.svg": "bbdfb490b4b8add248584b08bceb1dd3",
"assets/packages/pays_design_system/assets/images/svg/codepen.svg": "110787a544c2d891b4f699b1c14c173d",
"assets/packages/pays_design_system/assets/images/svg/command.svg": "ec41fae851890b4e14eebd963a7a136f",
"assets/packages/pays_design_system/assets/images/svg/compass.svg": "c7f4d30380ea508df405ba3981f0e58d",
"assets/packages/pays_design_system/assets/images/svg/copy.svg": "a428506a0f7018fa0088b4f999c2b1fc",
"assets/packages/pays_design_system/assets/images/svg/corner-down-left.svg": "035d1fc0719628e12deb3a1f87eebc54",
"assets/packages/pays_design_system/assets/images/svg/corner-down-right.svg": "150e099dcb30a355a248f3852be2aa0a",
"assets/packages/pays_design_system/assets/images/svg/corner-left-down.svg": "f856a9e4dbd2ad80f1a4126bb751bfe9",
"assets/packages/pays_design_system/assets/images/svg/corner-left-up.svg": "b039876620009253487e7b0b0e9b972f",
"assets/packages/pays_design_system/assets/images/svg/corner-right-down.svg": "124f72682f4b0c913af5246f468bfe40",
"assets/packages/pays_design_system/assets/images/svg/corner-right-up.svg": "c8114632364becb91ff36af5315b4892",
"assets/packages/pays_design_system/assets/images/svg/corner-up-left.svg": "916959543c9f3e4138020b559b34967e",
"assets/packages/pays_design_system/assets/images/svg/corner-up-right.svg": "16c9b37ac51c1faf538379e68393f323",
"assets/packages/pays_design_system/assets/images/svg/coupon-1.svg": "f55d79533f73c4e2ab7810167d8cca01",
"assets/packages/pays_design_system/assets/images/svg/coupon-2.svg": "a476faf69f8597ba02738ad0f3336d49",
"assets/packages/pays_design_system/assets/images/svg/coupon-3.svg": "091b12418bfdf28161c2dacca0b8b222",
"assets/packages/pays_design_system/assets/images/svg/coupon-4.svg": "c425e202aa7a56f290c1413804771087",
"assets/packages/pays_design_system/assets/images/svg/cpu.svg": "1e97aa417389c4595f5129736fc18873",
"assets/packages/pays_design_system/assets/images/svg/credit-card.svg": "ec78f48b9f1e14de756c212c7cac4f68",
"assets/packages/pays_design_system/assets/images/svg/crop.svg": "f62979c6c243b4687ea2733135875036",
"assets/packages/pays_design_system/assets/images/svg/crosshair.svg": "f908f5a08de750a23f3f02994a97fc54",
"assets/packages/pays_design_system/assets/images/svg/database.svg": "fdb349cbf195d2bdc096c10cbfb8b157",
"assets/packages/pays_design_system/assets/images/svg/delete.svg": "74fa3d184996ffc84d50e322db6bfdff",
"assets/packages/pays_design_system/assets/images/svg/disc.svg": "bd93812fcdf9a12a25a28178dd6b0302",
"assets/packages/pays_design_system/assets/images/svg/dollar-sign-1.svg": "7717df5924001bf5726a31b3e3a0b430",
"assets/packages/pays_design_system/assets/images/svg/dollar-sign.svg": "944ce1d524f7976232f081646a84607a",
"assets/packages/pays_design_system/assets/images/svg/down.svg": "9f8e418b200296e8bea9244d412e8a2c",
"assets/packages/pays_design_system/assets/images/svg/download-cloud.svg": "96d31b775348b64852deb2f27771ae16",
"assets/packages/pays_design_system/assets/images/svg/download.svg": "f2b236d32be0421bf89812ba0a4284a8",
"assets/packages/pays_design_system/assets/images/svg/drag-indicator.svg": "2d3e6e5f7c32465bb1948145a2d17edc",
"assets/packages/pays_design_system/assets/images/svg/droplet.svg": "1bf396445caa212b04e88275d216da6d",
"assets/packages/pays_design_system/assets/images/svg/edit-2.svg": "dcb7e2843c570c02f77bfbfc2a76130d",
"assets/packages/pays_design_system/assets/images/svg/edit-3.svg": "4751f469fbc3d17f396eeb47546c8d2b",
"assets/packages/pays_design_system/assets/images/svg/edit.svg": "567950c6ddf5ac65659abfd5223f1493",
"assets/packages/pays_design_system/assets/images/svg/empty-error.svg": "da4b9a1ec1d1c8e491f50784d1a6dd97",
"assets/packages/pays_design_system/assets/images/svg/empty-logo.svg": "64471f37fd087592a3e235126768b64e",
"assets/packages/pays_design_system/assets/images/svg/empty-nodata.svg": "dec1e81781c7596a5a6cf8749d6480cf",
"assets/packages/pays_design_system/assets/images/svg/external-link.svg": "24e19d03771787293885adb3d2dd14a1",
"assets/packages/pays_design_system/assets/images/svg/eye-off.svg": "e5d24f3bae1e93dcc37cc1925d075101",
"assets/packages/pays_design_system/assets/images/svg/eye.svg": "d3cb74e243c70eb3e4ecfe824d53019e",
"assets/packages/pays_design_system/assets/images/svg/facebook.svg": "383836a44c2e81c67a12f86caacedb6a",
"assets/packages/pays_design_system/assets/images/svg/fast-forward.svg": "9c378a2f4df6fe8e59cc5ec147562dd5",
"assets/packages/pays_design_system/assets/images/svg/feather.svg": "6f6a7ae541661be507baf65eea0f55d3",
"assets/packages/pays_design_system/assets/images/svg/file-minus.svg": "1c7a804cc5aef602fc6d4fb601aa9b33",
"assets/packages/pays_design_system/assets/images/svg/file-plus.svg": "c3edcedf1e7658006bf6f32bd4404f3d",
"assets/packages/pays_design_system/assets/images/svg/file-text.svg": "413783ff479b2126e111ef0ed819dd61",
"assets/packages/pays_design_system/assets/images/svg/file.svg": "238c5d6d773e39caecf1be6d686b8762",
"assets/packages/pays_design_system/assets/images/svg/film.svg": "a1ed38052049ab1918bb8a226acf5a0a",
"assets/packages/pays_design_system/assets/images/svg/filter.svg": "9f2b477e340e39466faaf8db55d96888",
"assets/packages/pays_design_system/assets/images/svg/flag.svg": "c7c602711918237f11ef7ff73b5076c4",
"assets/packages/pays_design_system/assets/images/svg/folder-minus.svg": "34f56b195a7febec1f7008b5013c9b0c",
"assets/packages/pays_design_system/assets/images/svg/folder-plus.svg": "31c83d92e5d0d8e490b32e1d8fe16d37",
"assets/packages/pays_design_system/assets/images/svg/folder.svg": "ccb9c7945c2c4e98061a5eb54591fe42",
"assets/packages/pays_design_system/assets/images/svg/gift.svg": "e09bbccf88ab148fb5aa6eb88a07214d",
"assets/packages/pays_design_system/assets/images/svg/git-branch.svg": "ee968c223096bf72579111fcff531bad",
"assets/packages/pays_design_system/assets/images/svg/git-commit.svg": "c7d2891514d514065f7ca9c71e88874d",
"assets/packages/pays_design_system/assets/images/svg/git-merge.svg": "b1a12cc30fc50ff18c58fecb2bb3c2f6",
"assets/packages/pays_design_system/assets/images/svg/git-pull-request.svg": "6625ab3eea3b95c994873a58b7ff1bd7",
"assets/packages/pays_design_system/assets/images/svg/github.svg": "b23b0cdcb5225d4ae435c9450ea70c6a",
"assets/packages/pays_design_system/assets/images/svg/gitlab.svg": "c863d03b8d2dc173e37db4f4e4a2f4e4",
"assets/packages/pays_design_system/assets/images/svg/globe.svg": "be00f9149a202452c90f739b951351b8",
"assets/packages/pays_design_system/assets/images/svg/grid.svg": "c4ece7f3ab175dd9178cb352032a270e",
"assets/packages/pays_design_system/assets/images/svg/hard-drive.svg": "124df0967f31d426755fc1e7a0716b20",
"assets/packages/pays_design_system/assets/images/svg/hash.svg": "d9d1f62e863891bb266134a1abe811f7",
"assets/packages/pays_design_system/assets/images/svg/headphones.svg": "10cd191d0be7a4c805c17f8ec93b02bb",
"assets/packages/pays_design_system/assets/images/svg/heart.svg": "30ab560fbdd299c008b2b912a4437eab",
"assets/packages/pays_design_system/assets/images/svg/help-circle.svg": "271719c2e927d691c1bc01cc929ab0bf",
"assets/packages/pays_design_system/assets/images/svg/help.svg": "fdea639a11442900c3a0fc5494550544",
"assets/packages/pays_design_system/assets/images/svg/home.svg": "f431b8429591654c690fa04ad53b7198",
"assets/packages/pays_design_system/assets/images/svg/image.svg": "d7e288779d82299e6f5bb9e5ae7b84c0",
"assets/packages/pays_design_system/assets/images/svg/inbox.svg": "586fb581827046aab9170e18f3a95c92",
"assets/packages/pays_design_system/assets/images/svg/info.svg": "fab0214f864c268ea69daddc89b4dedd",
"assets/packages/pays_design_system/assets/images/svg/instagram.svg": "bac1777b08a16cc3073446f445fe0856",
"assets/packages/pays_design_system/assets/images/svg/italic.svg": "108365fd5a618d4818988399ce1eef08",
"assets/packages/pays_design_system/assets/images/svg/jcb-logo.svg": "2c256fe433bdff0e36fb7b13ae4e7c4a",
"assets/packages/pays_design_system/assets/images/svg/layers.svg": "c77de26cb0d4a544dd9507b897819df4",
"assets/packages/pays_design_system/assets/images/svg/layout.svg": "ecc111438decad1f8a4ddfc3b9b03f5e",
"assets/packages/pays_design_system/assets/images/svg/life-buoy.svg": "9cb2f4418697fe94c07a7793d8c8f886",
"assets/packages/pays_design_system/assets/images/svg/link-2.svg": "9f51a87dd3b52f3ebc40d0bca89ac715",
"assets/packages/pays_design_system/assets/images/svg/link.svg": "7133f82751d4f0808dc15f4bbf5d7f55",
"assets/packages/pays_design_system/assets/images/svg/linkedin.svg": "bf27ee5c5aa2815a5554357abfdd1128",
"assets/packages/pays_design_system/assets/images/svg/list.svg": "8bf72b9e4ef7801c9cb99d6263e4c0ec",
"assets/packages/pays_design_system/assets/images/svg/loader.svg": "bfcad3be2788a2a0c949561d3c439033",
"assets/packages/pays_design_system/assets/images/svg/lock.svg": "1122d333090c1edfca4bb82a02c024bf",
"assets/packages/pays_design_system/assets/images/svg/log-in.svg": "d3ed7662a16346408b4ba19686a63057",
"assets/packages/pays_design_system/assets/images/svg/log-out.svg": "5a13c823075c78653aa21a5c8a407a4d",
"assets/packages/pays_design_system/assets/images/svg/logo_icon.svg": "f4c0b9b0eb15c9591ed18c25515d77a4",
"assets/packages/pays_design_system/assets/images/svg/mail.svg": "b08883b5280790663f1aab7ffdb64276",
"assets/packages/pays_design_system/assets/images/svg/map-pin.svg": "0474912b7512e5d4b6ed997474767e9c",
"assets/packages/pays_design_system/assets/images/svg/map.svg": "c3e5acbf3a7fcb43335e4a5cbcde76a0",
"assets/packages/pays_design_system/assets/images/svg/mastercard-logo.svg": "39ef5cfa4149b0e12335d6945933c41a",
"assets/packages/pays_design_system/assets/images/svg/maximize-2.svg": "e7a99b803f71575852d8a1bd458a6013",
"assets/packages/pays_design_system/assets/images/svg/maximize.svg": "8cb4f2b0dbb5bcd555cf2cc25841c54f",
"assets/packages/pays_design_system/assets/images/svg/member-1.svg": "fef217e29c0c2a832146f64fc5ab9400",
"assets/packages/pays_design_system/assets/images/svg/member-3.svg": "08698846bf186d0eb6d1230d00df167a",
"assets/packages/pays_design_system/assets/images/svg/member-4.svg": "c487d408bb8cf63604f0537a3fd3a817",
"assets/packages/pays_design_system/assets/images/svg/menber-2.svg": "c79373d53b2dfcd1f75c80ed2dd0987b",
"assets/packages/pays_design_system/assets/images/svg/menu.svg": "45baf96deec444c616acebf1b5c9f1f0",
"assets/packages/pays_design_system/assets/images/svg/message-circle.svg": "196e46efb4caa0cde60ab999ae37950c",
"assets/packages/pays_design_system/assets/images/svg/message-square.svg": "9b8ef07abf7b1a2968e3e978622b76f5",
"assets/packages/pays_design_system/assets/images/svg/mic-off.svg": "34834ff82a70e1fddecf257af358b199",
"assets/packages/pays_design_system/assets/images/svg/mic.svg": "069487519136f03c199b39d6d926f502",
"assets/packages/pays_design_system/assets/images/svg/minimize-2.svg": "b133aa83af57e6dfcea5e259de5deb57",
"assets/packages/pays_design_system/assets/images/svg/minimize.svg": "5e7c908c8899db84e81d3291d10b3f5e",
"assets/packages/pays_design_system/assets/images/svg/minus-circle.svg": "bb0eab242a4c3d4def13416697650a2b",
"assets/packages/pays_design_system/assets/images/svg/minus-square.svg": "eea62b7580ec21e531206cb1cc80d7df",
"assets/packages/pays_design_system/assets/images/svg/minus.svg": "fe98169bed3128fa5ca557c66f351b82",
"assets/packages/pays_design_system/assets/images/svg/money-1.svg": "33b709ce179b0449fc1df1ffbb9520c9",
"assets/packages/pays_design_system/assets/images/svg/money-2.svg": "ad16d8d3df4ecef07fc6b89a7c85889b",
"assets/packages/pays_design_system/assets/images/svg/money-3.svg": "60d596857ea30c4df92c5da4ae524038",
"assets/packages/pays_design_system/assets/images/svg/money-4.svg": "7205e439a57cfed4c8d922f715a1b2b4",
"assets/packages/pays_design_system/assets/images/svg/money-5.svg": "e7d7da11274a0b2b7c32c68f4f9a31c4",
"assets/packages/pays_design_system/assets/images/svg/monitor.svg": "6f80d388bce890df70a6a2f088f57e0d",
"assets/packages/pays_design_system/assets/images/svg/moon.svg": "e5bb219ceed21c50189e59f85dee87ba",
"assets/packages/pays_design_system/assets/images/svg/more-horizontal.svg": "7ee4f940eae9c96f12eb2537f45e08cd",
"assets/packages/pays_design_system/assets/images/svg/more-vertical.svg": "7d267485408f3b60b5f7ee338cb0f83b",
"assets/packages/pays_design_system/assets/images/svg/move.svg": "4ef3cfb72ab4485124903eed3783b99d",
"assets/packages/pays_design_system/assets/images/svg/music.svg": "f00b5ea7aa888f9583259b5f3bf49ecb",
"assets/packages/pays_design_system/assets/images/svg/navigation-2.svg": "ae7369e32a4d129ae0a3d680dec57553",
"assets/packages/pays_design_system/assets/images/svg/navigation.svg": "6f2d34799657f38af8dea549d831ec85",
"assets/packages/pays_design_system/assets/images/svg/octagon.svg": "d79b8d1c87fc6cd52c70e81fdef442ed",
"assets/packages/pays_design_system/assets/images/svg/office.svg": "e0c4ec0f8459de0c1bd2a191ddec1ee2",
"assets/packages/pays_design_system/assets/images/svg/package.svg": "71ac6c75c08224758ba5fbbcdefd4bd2",
"assets/packages/pays_design_system/assets/images/svg/paperclip.svg": "fcc2137b30ac8c3f2ce9ee8f5d7664bb",
"assets/packages/pays_design_system/assets/images/svg/pause-circle.svg": "929a838bedb490ea35a41104ba06a8ac",
"assets/packages/pays_design_system/assets/images/svg/pause.svg": "61731f75e85e6bf418f237a3f74ca6af",
"assets/packages/pays_design_system/assets/images/svg/paybox.svg": "3a4ed91c60a63c06052a04554f44a58b",
"assets/packages/pays_design_system/assets/images/svg/percent.svg": "ca985a8eb9199eed1184dd0d3239c715",
"assets/packages/pays_design_system/assets/images/svg/phone-call.svg": "f5fd8e7bbd7b9c0ea812ad471ca50342",
"assets/packages/pays_design_system/assets/images/svg/phone-forwarded.svg": "369879bdf52281ab863d0aabdd0c54ec",
"assets/packages/pays_design_system/assets/images/svg/phone-incoming.svg": "e3c04e17b1923c5783488d82911e1393",
"assets/packages/pays_design_system/assets/images/svg/phone-missed.svg": "d66e6012853a1cf6d3a1d52cedc4bec5",
"assets/packages/pays_design_system/assets/images/svg/phone-off.svg": "42c89174a667f776383daa4b1f1e6ad6",
"assets/packages/pays_design_system/assets/images/svg/phone-outgoing.svg": "362ada0f1f7ea9b361ff943fb623ce5a",
"assets/packages/pays_design_system/assets/images/svg/phone.svg": "038da4cafaa02184604d0322f0e89c4a",
"assets/packages/pays_design_system/assets/images/svg/pie-chart.svg": "00396dd6e68cb8c72c50c10c0d9aa1d0",
"assets/packages/pays_design_system/assets/images/svg/play-circle.svg": "7cfb9ff738a5e9c6c0516998693d21e3",
"assets/packages/pays_design_system/assets/images/svg/play.svg": "c3a4e2962877ce0ea3aa345b55a77a49",
"assets/packages/pays_design_system/assets/images/svg/plus-circle.svg": "00f82cf369e0b14259d7e9cbad43d642",
"assets/packages/pays_design_system/assets/images/svg/plus-square.svg": "a1683562ce22481c6cf63e7ade39e691",
"assets/packages/pays_design_system/assets/images/svg/plus.svg": "393aaba7786c5e2134580080d27d4c2d",
"assets/packages/pays_design_system/assets/images/svg/pocket.svg": "06519dc844555468bfd4e5206645c968",
"assets/packages/pays_design_system/assets/images/svg/point-1.svg": "5a3e3908827cf085f42668626b68a77b",
"assets/packages/pays_design_system/assets/images/svg/point-2.svg": "6c55e84691c31e3145f670ba3dda608f",
"assets/packages/pays_design_system/assets/images/svg/point-3.svg": "624ed92bcc85fd17e976ce9d40a4c497",
"assets/packages/pays_design_system/assets/images/svg/point-4.svg": "a5558a36dc700df75d9ae9edfe67f0f1",
"assets/packages/pays_design_system/assets/images/svg/pokepay-1.svg": "f4e4da35518faaac8d099890cecde771",
"assets/packages/pays_design_system/assets/images/svg/pokepay-2.svg": "bc805a0d28314851e6774fcfd7a47809",
"assets/packages/pays_design_system/assets/images/svg/pokepay-watermark.svg": "722535dd7fa110239789b03147b52421",
"assets/packages/pays_design_system/assets/images/svg/power.svg": "25f7daae404965d24637563763712e57",
"assets/packages/pays_design_system/assets/images/svg/printer.svg": "d982f5678a23452190846dcec0db692d",
"assets/packages/pays_design_system/assets/images/svg/qr.svg": "c28836bf234518ee3afaf975266188f1",
"assets/packages/pays_design_system/assets/images/svg/radio.svg": "666afebd86a786c80578d6de7443a255",
"assets/packages/pays_design_system/assets/images/svg/refresh-ccw.svg": "e08ac9676c247609ca2495429fc63000",
"assets/packages/pays_design_system/assets/images/svg/refresh-cw.svg": "825b56eb627e6eab418a250209a3ab99",
"assets/packages/pays_design_system/assets/images/svg/repeat.svg": "cb27cb8f7ac9142a504eca5dfe0657de",
"assets/packages/pays_design_system/assets/images/svg/rewind.svg": "2c1a4bfa647cb072521b1b2d8f4358cf",
"assets/packages/pays_design_system/assets/images/svg/rotate-ccw.svg": "6986a549ea917edac8c1e13626a75360",
"assets/packages/pays_design_system/assets/images/svg/rotate-cw.svg": "d92739ff90263590099148e739f39755",
"assets/packages/pays_design_system/assets/images/svg/rss.svg": "16a41d28c2b3732c69b6cee56092ddc5",
"assets/packages/pays_design_system/assets/images/svg/save.svg": "74fffe51241da58f90144aa059b5201e",
"assets/packages/pays_design_system/assets/images/svg/scissors.svg": "451b4387d0e263ac09a49a86f31861d1",
"assets/packages/pays_design_system/assets/images/svg/search.svg": "43ae9cfb2039176714d1bddf627326c8",
"assets/packages/pays_design_system/assets/images/svg/send.svg": "e9ee87ed25866b95501a53a418c6f23f",
"assets/packages/pays_design_system/assets/images/svg/server.svg": "0682eeaa84c5640febe23d711611d258",
"assets/packages/pays_design_system/assets/images/svg/settings.svg": "aa12ccca99515886900c80c8f2f6b356",
"assets/packages/pays_design_system/assets/images/svg/share-2.svg": "5c5b2ffc554becc000c1e39932df51e8",
"assets/packages/pays_design_system/assets/images/svg/share.svg": "ac067a47ef8ee1618975ac6853bae3a5",
"assets/packages/pays_design_system/assets/images/svg/shield-off.svg": "65f78b4f34074e37d9199b3f46d60ddc",
"assets/packages/pays_design_system/assets/images/svg/shield.svg": "3a3ed621a5df690a3dff464076fb2730",
"assets/packages/pays_design_system/assets/images/svg/shopping-bag.svg": "17b04c335778d26cf6acf1ff2e3a2201",
"assets/packages/pays_design_system/assets/images/svg/shopping-cart.svg": "763969828fb679aee1eeb6beaf00b26c",
"assets/packages/pays_design_system/assets/images/svg/shuffle.svg": "43ebb932dd8a2c2d52ce22af27f59b3e",
"assets/packages/pays_design_system/assets/images/svg/sidebar.svg": "97748bc49f5be6ceb50a71f696b06a23",
"assets/packages/pays_design_system/assets/images/svg/skip-back.svg": "a1cde6dcbedfc76bb759ccfcda3a5a47",
"assets/packages/pays_design_system/assets/images/svg/skip-forward.svg": "c5bf72f4af2fc19e7ecb0515623d2c4a",
"assets/packages/pays_design_system/assets/images/svg/slack.svg": "292d12ee0b22811d1a96699c106c0ad1",
"assets/packages/pays_design_system/assets/images/svg/slash.svg": "f6b34abe64d5848931c5f873937880aa",
"assets/packages/pays_design_system/assets/images/svg/sliders.svg": "aded06863d6078e858e08444d1441816",
"assets/packages/pays_design_system/assets/images/svg/smartphone.svg": "3da92f5306da248dbe989edf89f8dc32",
"assets/packages/pays_design_system/assets/images/svg/sorting.svg": "466236f2a8d58321ede1e943ae8194b6",
"assets/packages/pays_design_system/assets/images/svg/speaker.svg": "ced3aa7f9a2f688b6b99ea77b6a6b93c",
"assets/packages/pays_design_system/assets/images/svg/square.svg": "dbdf77692ec166e03c7b9ed98639ee75",
"assets/packages/pays_design_system/assets/images/svg/star.svg": "d63ab2f69ed990025a50c3934806618b",
"assets/packages/pays_design_system/assets/images/svg/stop-circle.svg": "abe181c9e78003d3b51d78acf7bf02c4",
"assets/packages/pays_design_system/assets/images/svg/store-1.svg": "d2b86d4c5535f57507c23e432ee971af",
"assets/packages/pays_design_system/assets/images/svg/store.svg": "d2b86d4c5535f57507c23e432ee971af",
"assets/packages/pays_design_system/assets/images/svg/sun.svg": "19f98a19ea7c7ac54f3357691bba3188",
"assets/packages/pays_design_system/assets/images/svg/sunrise.svg": "d0fca9bceb1a6895905793b32da63fc5",
"assets/packages/pays_design_system/assets/images/svg/sunset.svg": "b00d57a06eff3ba40692f947cbd112e1",
"assets/packages/pays_design_system/assets/images/svg/tablet.svg": "2165481e7346565d25c8abb52ea247cb",
"assets/packages/pays_design_system/assets/images/svg/tag.svg": "f73f197923ab483f55e66857cba9a723",
"assets/packages/pays_design_system/assets/images/svg/target.svg": "147db28d4f87eefd91a87acd8e56b560",
"assets/packages/pays_design_system/assets/images/svg/team_settings-1.svg": "d6844907e594719b71cc4dd37d74fcd8",
"assets/packages/pays_design_system/assets/images/svg/team_settings-2.svg": "2a403d935c53b3995de3f6fbc03de1d2",
"assets/packages/pays_design_system/assets/images/svg/terminal.svg": "40742b70feb4350b86a6b40bbf524697",
"assets/packages/pays_design_system/assets/images/svg/thermometer.svg": "f1353c83705b283c87bea283bbb97d18",
"assets/packages/pays_design_system/assets/images/svg/thumbs-down.svg": "efcc2bd7f135572683f4809b38fda581",
"assets/packages/pays_design_system/assets/images/svg/thumbs-up.svg": "f7de8bc09c94721cb69219d51bb6cf32",
"assets/packages/pays_design_system/assets/images/svg/toggle-left.svg": "0d885d44883c99b5ff767a569dc4bbab",
"assets/packages/pays_design_system/assets/images/svg/toggle-right.svg": "26e60192cdffda517005e75b902b5f45",
"assets/packages/pays_design_system/assets/images/svg/transaction-1.svg": "c91a03a61b887dd87811f044d84bc674",
"assets/packages/pays_design_system/assets/images/svg/transaction-2.svg": "cea0ec541cfc45467cfeab04c8b0cd6b",
"assets/packages/pays_design_system/assets/images/svg/trash-2.svg": "af9a94f8b810e27a0d2a283421616183",
"assets/packages/pays_design_system/assets/images/svg/trash.svg": "6740df4469211cb714e2800e4151d832",
"assets/packages/pays_design_system/assets/images/svg/trending-down.svg": "053a8045b9fcb65c0ab7dd9d5c32e6de",
"assets/packages/pays_design_system/assets/images/svg/trending-up.svg": "043234daf2d0f900a34b2190696c4fde",
"assets/packages/pays_design_system/assets/images/svg/triangle.svg": "f213e725eb69d7ce675915cb7c260040",
"assets/packages/pays_design_system/assets/images/svg/truck.svg": "9f4fc1a073bbbf8a91f7f63f38efc0ba",
"assets/packages/pays_design_system/assets/images/svg/tv.svg": "2ee1aa372ab3a9eaf704c2d1d3c62956",
"assets/packages/pays_design_system/assets/images/svg/twitter.svg": "c3b9775a3782473a59961ed7ebc4e4b6",
"assets/packages/pays_design_system/assets/images/svg/type.svg": "4cd70cdc317612b17f273e20fb182f86",
"assets/packages/pays_design_system/assets/images/svg/umbrella.svg": "40c6210c13bc3d1b12e96cf071b13086",
"assets/packages/pays_design_system/assets/images/svg/underline.svg": "bcd2b6bfe52a4a7595a8eec6fe0afd4d",
"assets/packages/pays_design_system/assets/images/svg/unlock.svg": "77486c5c41d27f32706bb2ba7724e8dd",
"assets/packages/pays_design_system/assets/images/svg/up.svg": "7a8b73919b9bac9fdf246dbffc4fd81c",
"assets/packages/pays_design_system/assets/images/svg/upload-cloud.svg": "f3cdf5718d74e9e884d6ef6029cf0ce2",
"assets/packages/pays_design_system/assets/images/svg/upload.svg": "0ad74b97ac1f7f1da4ffd42aa24ab45f",
"assets/packages/pays_design_system/assets/images/svg/user-check.svg": "456612def37ae15368fa8aaf6ae751e6",
"assets/packages/pays_design_system/assets/images/svg/user-minus.svg": "d1d2dc50630bd3d42e23d241edeb870d",
"assets/packages/pays_design_system/assets/images/svg/user-plus.svg": "03c44bdc33bbaaa92e7e9fb5a00022e4",
"assets/packages/pays_design_system/assets/images/svg/user-x.svg": "2ec51d8528227157bdceb7f31db79cd7",
"assets/packages/pays_design_system/assets/images/svg/user.svg": "c6efcdc0393857281246c6837cf3bb29",
"assets/packages/pays_design_system/assets/images/svg/users.svg": "124322665d54e29f3a06ec9b153e09ee",
"assets/packages/pays_design_system/assets/images/svg/video-off.svg": "1b5d39355ec330996a24c525dd9b76d9",
"assets/packages/pays_design_system/assets/images/svg/video.svg": "73fdc9a156820efc3372d19101feed40",
"assets/packages/pays_design_system/assets/images/svg/visa-logo.svg": "70452841f07350f225c91b72a0a257c7",
"assets/packages/pays_design_system/assets/images/svg/voicemail.svg": "6807f788530da60aef5e188a9afd3541",
"assets/packages/pays_design_system/assets/images/svg/volume-1.svg": "2a2f47dbc67b99a5ead0a8792d8614a7",
"assets/packages/pays_design_system/assets/images/svg/volume-2.svg": "3bf67c96ff020c3bd836d2f60f3fc228",
"assets/packages/pays_design_system/assets/images/svg/volume-x.svg": "c573998f98ca4723d2a3c848e4447823",
"assets/packages/pays_design_system/assets/images/svg/volume.svg": "b293d1021ea28928fd0ac90492bab2db",
"assets/packages/pays_design_system/assets/images/svg/watch.svg": "ca8c4a518bf0b601a74f5682d8ed217b",
"assets/packages/pays_design_system/assets/images/svg/wifi-off.svg": "2e38c8097ea3477980d36f0bafd1d090",
"assets/packages/pays_design_system/assets/images/svg/wifi.svg": "a539eea094e102831e6ab8a1e79e8ba9",
"assets/packages/pays_design_system/assets/images/svg/wind.svg": "a14c45d975e0ada0abda1add68fc0ae7",
"assets/packages/pays_design_system/assets/images/svg/x-circle.svg": "f8eb80b999f5795f790fcb72c61bd836",
"assets/packages/pays_design_system/assets/images/svg/x-square.svg": "d04fbd7899dd648c4375f397fe3334fd",
"assets/packages/pays_design_system/assets/images/svg/x.svg": "e2a5eec5934e91cc7a1ff89d0ac635d3",
"assets/packages/pays_design_system/assets/images/svg/youtube.svg": "1947aa7d5d2886f08d68f10a3f9b92a7",
"assets/packages/pays_design_system/assets/images/svg/zap-off.svg": "e2fec51df864293e1cea48e8880b4e9a",
"assets/packages/pays_design_system/assets/images/svg/zap.svg": "39620f39903ef7a902e096639f056c18",
"assets/packages/pays_design_system/assets/images/svg/zoom-in.svg": "a00eaddaaecbfdc18bd8678f28a7f9de",
"assets/packages/pays_design_system/assets/images/svg/zoom-out.svg": "c71c0f67f2337f1dfe2e81c302e2d69a",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cac3428dd7af6e8b101e184da08e434a",
"/": "cac3428dd7af6e8b101e184da08e434a",
"loading/loader.css": "26dcfc9e1794554e3552c772bd4c2b03",
"loading/loader.js": "d73f0c045b1a2397ea931859e5a8da12",
"loading/pokepay-logo.svg": "56d8221b9ec4e17570bd0144bf898b8e",
"loading/pokepay.svg": "b7b8538e259f3a4ee0b3a92a3ecbbdca",
"main.dart.js": "e0a11d758514e159f05950080348c2d0",
"manifest.json": "71f5902ecaa1880b166fa2bed402572e",
"version.json": "3c476c38e3bb9d9eff72274aa593a9ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
