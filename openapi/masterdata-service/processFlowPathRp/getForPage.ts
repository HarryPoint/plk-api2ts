// 工序字段对应表列表查询VO
export interface I工序字段对应表列表查询VO {
    // 编号
    code: string;
    // 当前页面
    pageNo: number;
    // 工序名称
    processName: string;
    // 分页大小
    pageSize: number;
    // 关联字段名称
    fieldName: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 数据状态 -- 0停用 1启用
    dataStatus: number;
    // 创建日期---开始时间
    startTime: string;
    // 创建日期---结束时间
    endTime: string;
}
// JSONResult«分页信息«工序字段对应表列表VO»»
export interface IJSONResult分页信息工序字段对应表列表VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«工序字段对应表列表VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
