// 班次编辑DTO
export interface I班次编辑DTO {
    // id
    id: number;
    // 班次名称
    name: string;
    // 班次编号
    code: string;
    // 开始时间 HH:mm
    beginTime: string;
    // 班次结束时间类型
    endTimeType: string;
    // 结束时间 HH:mm
    endTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
