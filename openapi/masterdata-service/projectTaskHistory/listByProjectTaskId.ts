// JSONResult«List«项目任务历史查询响应»»
export interface IJSONResultList项目任务历史查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目任务历史查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
