// TSK报表查询DTO_1
export interface ITSK报表查询DTO_1 {
    // 字段搜索
    dataSearchList: I流程数据明细搜索VO[];
    // 当前页面
    pageNo: number;
    // 显示字段序列号
    showFieldSerialNoList: string[];
    // 分页大小
    pageSize: number;
}
// 流程数据明细搜索VO
export interface I流程数据明细搜索VO {
    // 列code
    code: string;
    // 搜索类型
    searchType: string;
    // 搜索文本 - 针对文本搜索
    text: string;
    // 搜索起始值 - 针对范围搜索
    limitBegin;
    // 搜索结束值 - 针对范围搜索
    limitEnd;
    // 搜索选项值 - 针对选择搜索
    selectors: undefined[];
    // 表格编码
    tableCode: string;
}
// JSONResult«分页信息«TSK报表查询DTO»»
export interface IJSONResult分页信息TSK报表查询DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息TSK报表查询DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«TSK报表查询DTO»
export interface I分页信息TSK报表查询DTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITSK报表查询DTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// TSK报表查询DTO
export interface ITSK报表查询DTO {
}
