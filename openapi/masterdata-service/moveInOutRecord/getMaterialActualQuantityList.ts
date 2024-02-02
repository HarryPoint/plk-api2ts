// 物料产出搜索VO
export interface I物料产出搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序步骤ids
    routingStepIds: number[];
    // 排序字段集
    orders: I分页排序VO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«物料产出VO»»
export interface IJSONResultList物料产出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料产出VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料产出VO
export interface I物料产出VO {
    // 物料id
    materialId: number;
    // 物料产出(出站总数量)
    actualQuantity: number;
}
