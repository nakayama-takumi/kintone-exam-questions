// テストが実行される前に読み込まれる、global変数設定。

global.kintone = {
    events: {
        on: () => {}
    },
    app: {
        record: {
            setFieldShown: () => {},
            get: () => {},
        },
        getRelatedRecordsTargetAppId: () => {},
        getLookupTargetAppId: () => {},
    }
};