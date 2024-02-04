// 设备数采通讯参数编辑DTO
export interface I设备数采通讯参数编辑DTO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 数据类型
    dataType: string;
    // 单位类型
    unitType: string;
    // 是否应用编码规则
    isCodeRule: string;
    // 单位
    unit: string;
    // 备注
    remark: string;
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
