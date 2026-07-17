import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "f8f550efd4ca4f6e86addec2199ed419"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "dc383fbe760d475aab406ae1799b657e"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "6b8ca71106f243938ee3d49ac3bfecda"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "971ce52bb19644499ffd6d84d5cc3858"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "4415f01de4a84835a740ffe2866f33d8",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "f2ef2cb8fac747eb9716d36bc30d6754",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "20b66ae1295d4e7cb408702e38e4d12c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
