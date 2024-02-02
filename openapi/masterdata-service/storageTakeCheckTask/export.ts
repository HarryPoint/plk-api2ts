// 仓库盘点任务分页查询对象
export interface I仓库盘点任务分页查询对象 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 任务编号
    taskNo: string;
    // 盘点仓库id
    storehouseIds: number[];
    // 物料id
    materialIds: number[];
    // 完成开始时间 yyyy-MM-dd HH:mm:ss
    completeBeginTime: string;
    // 处理人id
    handleUserIds: number[];
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    planBeginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    planEndTime: string;
    // 状态
    status: string;
    // 完成结束时间 yyyy-MM-dd HH:mm:ss
    completeEndTime: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
