// JSONResult«List«设备DTO»»
export interface IJSONResultList设备DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备DTO
export interface I设备DTO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 设备厂商
    firm: string;
    // 入厂日期
    enteringDate: string;
    // 出厂日期
    leaveDate: string;
    // 设备出厂编号
    leaveCode: string;
    // 备注
    remark: string;
}
