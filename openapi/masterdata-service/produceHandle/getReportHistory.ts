// 生产处理查询VO
export interface I生产处理查询VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 类型
    types: string[];
    // 排序字段集
    orders: 分页排序VO[];
    // 任务id
    taskId: number;
    // 上报类型/上报标签 检索关键字
    searchKeyWord: string;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«分页信息«生产处理基础信息响应DTO»»
export interface IJSONResult分页信息生产处理基础信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«生产处理基础信息响应DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
