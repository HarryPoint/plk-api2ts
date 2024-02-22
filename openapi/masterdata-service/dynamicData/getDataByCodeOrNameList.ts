// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getDataByCodeOrNameListUsingPOST
// 流程表单Code或Name搜索VO
export interface IProcessFormCodeOrNameSearchesForVO {
    // 应用code
    flowPathCode: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 字段搜索
    dataSearchList: IProcessDataDetailsSearchVO[];
    // 排序字段集
    orders: IPagingSortVO[];
    // 搜索值
    searchValue: string;
}
// 流程数据明细搜索VO
export interface IProcessDataDetailsSearchVO {
    // 列code
    code: string;
    // 搜索类型
    searchType: string;
    // 搜索文本 - 针对文本搜索
    text: string;
    // 搜索起始值 - 针对范围搜索
    limitBegin: Record<string, any>;
    // 搜索结束值 - 针对范围搜索
    limitEnd: Record<string, any>;
    // 搜索选项值 - 针对选择搜索
    selectors: Record<string, any>[];
    // 表格编码
    tableCode: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
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
