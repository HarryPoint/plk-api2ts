// 打印模板数据查询对象
export interface IPrintTemplateDataQueryObjects {
    // 数据id集合
    masterDataIds: number[];
    // 明细表格字段id集合
    detailFlowPathFormFieldIds: number[];
    // 数据源id
    dataSourceId: number;
    // 打印模板id
    printTemplateId: number;
    // 明细表格字段serialNo集合
    detailFlowPathFormFieldSerialNos: string[];
}
// JSONResult«List«JSONObject»»
export interface IJSONResultListJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IJSONObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// JSONObject
export interface IJSONObject {
}
