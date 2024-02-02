// 项目概况查询dto
export interface I项目概况查询dto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«List«项目任务类型分布响应对象»»
export interface IJSONResultList项目任务类型分布响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目任务类型分布响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
