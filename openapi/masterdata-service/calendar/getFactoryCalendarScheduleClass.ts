// 日期范围查询 DTO
export interface I日期范围查询DTO {
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«List«工厂日历排期班次关系VO»»
export interface IJSONResultList工厂日历排期班次关系VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工厂日历排期班次关系VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
