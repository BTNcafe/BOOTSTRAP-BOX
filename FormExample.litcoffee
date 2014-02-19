# 부트스트랩 커피케이스 테스트

    require "./UPPERCASE_ONE/BOOT.js"

    main = (BOX) ->
        BOX.MATCH_VIEW

            uris: [""]

            target: CLASS
                preset: -> VIEW

                init: (cls, inner, self) ->
                    B = BOOTSTRAP

폼을 미리 만든다.

                    form = B.FORM
                        children: [
                            B.LABEL
아직 for 설정은 적용되지 않는다.

                                for: 'name'
                                children: ['Text']
                            B.FORMCONTROL_INPUT(name : 'name')
                        ]

                    BODY.append B.APPLY
                        children:[B.CONTAINER children: [form]]
                    
                    return
        return

    BOOT
        CONFIG:
            isDevMode: true

        SERVER_CONFIG:
            isNotUseDB: true

        BROWSER_CONFIG:
            MAIN: main
