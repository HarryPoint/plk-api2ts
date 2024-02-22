import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProduceTaskCanOperatorForMobileUsingPOST
export function fetchMethod(data: IProductionTaskListYouCanQueryDtosForBatchOperationItemsOnMobileTerminals, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/produceTask/getProduceTaskCanOperatorForMobile",
      data,
      params,
    });
}
// 生产任务列表可批量操作项查询DTO(针对移动端)
export interface IProductionTaskListYouCanQueryDtosForBatchOperationItemsOnMobileTerminals {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 任务类型
    types: string[];
    // 导出字段集
    exportFields: string[];
    // 生产任务可操作类型
    optTypes: string[];
    // 工序id
    processId: number;
    // 任务ids
    taskIds: number[];
    // 生产订单号/生产任务编号(扫码查询时默认为生产订单号)
    codeSearch: string;
    // 物料id
    materialIds: number[];
    // 任务状态
    statusList: string[];
    // 生产任务编号集合(扫码查询切换进出料查询时传参)
    taskNos: string[];
    // 工序id集合
    processIds: number[];
    // 开始时间 yyyy-MM-dd HH:mm:dd
    beginTime: string;
    // 计划生产数量最低数量
    planProduceMinQuantity: number;
    // 结束时间 yyyy-MM-dd HH:mm:dd
    endTime: string;
    // 计划生产数量最高数量
    planProduceMaxQuantity: number;
    // 任务进站关键参数是否需要填写
    moveInKeyParameterFillNeeds: string;
    // 查询类型
    queryType: string;
    // undefined
    produceOrderIds: number[];
    // undefined
    userId: number;
    // 任务出站关键参数是否需要填写
    moveOutKeyParameterFillNeeds: string;
    // 生产订单字段搜索
    produceOrderSearchList: IProcessDataDetailsSearchVO[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
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
// JSONResult«生产任务列表可批量操作按钮返回DTO(针对移动端)»
export interface IJSONResultProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务列表可批量操作按钮返回DTO(针对移动端)
export interface IProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd {
    // 可批量进料
    canBatchMoveIn: string;
    // 可批量出料
    canBatchMoveOut: string;
    // 可批量录入设备
    canBatchRecordDevice: string;
    // 可批量录入模具
    canBatchRecordMold: string;
}
