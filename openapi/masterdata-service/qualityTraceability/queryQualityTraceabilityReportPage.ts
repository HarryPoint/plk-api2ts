// 质量追溯报表查询DTO
export interface I质量追溯报表查询DTO {
    // 字段搜索
    dataSearchList: IProcessDataDetailsSearchVO[];
    // 当前页面
    pageNo: number;
    // 显示字段序列号
    showFieldSerialNoList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
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
    limitBegin;
    // 搜索结束值 - 针对范围搜索
    limitEnd;
    // 搜索选项值 - 针对选择搜索
    selectors: undefined[];
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
// JSONResult«分页信息«质量追溯报表响应DTO»»
export interface IJSONResult分页信息质量追溯报表响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息质量追溯报表响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质量追溯报表响应DTO»
export interface I分页信息质量追溯报表响应DTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I质量追溯报表响应DTO[];
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
// 质量追溯报表响应DTO
export interface I质量追溯报表响应DTO {
    // 批次
    lotNo: string;
    // 原批次
    originalLotNo: string;
    // 批次操作时间
    lotNoOptDateTime: string;
    // 工序
    processId: undefined[];
    // 操作类型
    optType: string;
    // 操作员
    optEmployeeId: undefined[];
    // 操作时间
    optDateTime: string;
    // 生产物料
    materialId: undefined[];
    // 操作数量
    optQuantity: number;
    // 生产设备
    deviceList: undefined[];
    // 生产模具
    moldList: undefined[];
    // 进料BOM消耗确认
    bomConsumeList: I质量追溯进料BOM消耗确认报表响应DTO[];
    // 任务编号
    produceTaskNo: string;
    // 任务状态
    produceTaskStatus: string;
    // 生产订单号
    produceOrderCode: string;
}
// 质量追溯进料BOM消耗确认报表响应DTO
export interface I质量追溯进料BOM消耗确认报表响应DTO {
    // 消耗物料
    consumeMaterialId: undefined[];
    // 消耗数量
    consumeQuantity: number;
    // 外部码
    externalCodeList: string;
    // 消耗物料批次
    lotNoList: string;
    // 消耗物料序列号
    serialNoList: string;
}
