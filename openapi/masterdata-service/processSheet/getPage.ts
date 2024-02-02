// 工艺卡搜索VO
export interface ICraftCardSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 所属工序id
    processId: number;
    // 名称
    name: string;
    // 所属物料id
    materialId: number;
    // 状态(是否可用)
    dataStatus: number;
}
// JSONResult«分页信息«工艺卡返回VO»»
export interface IJSONResultPagingInformationProcessCardReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«工艺卡返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
