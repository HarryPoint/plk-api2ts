// 质检任务针对员工端搜索VO_1
export interface I质检任务针对员工端搜索VO_1 {
    // 当前页面
    pageNo: number;
    // 任务状态
    statusList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 送检人id
    createUserId: number;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 送检物料id
    materialId: number;
}
// JSONResult«分页信息«质检任务返回VO»»
export interface IJSONResult分页信息质检任务返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«质检任务返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
