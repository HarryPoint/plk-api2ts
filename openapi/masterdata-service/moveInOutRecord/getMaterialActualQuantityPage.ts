// 物料产出搜索VO
export interface I物料产出搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序步骤ids
    routingStepIds: number[];
    // 排序字段集
    orders: 分页排序VO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«分页信息«物料产出VO»»
export interface IJSONResult分页信息物料产出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«物料产出VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
