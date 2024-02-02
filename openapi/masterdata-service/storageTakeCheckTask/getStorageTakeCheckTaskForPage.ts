// 仓库盘点任务执行端搜索VO
export interface I仓库盘点任务执行端搜索VO {
    // 处理类型
    handleType: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
}
// JSONResult«分页信息«仓库盘点任务执行端返回DTO»»
export interface IJSONResult分页信息仓库盘点任务执行端返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«仓库盘点任务执行端返回DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
