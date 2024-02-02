// 编辑设备数采方案 DTO
export interface I编辑设备数采方案DTO {
    // id，如果不传就是新增
    id: number;
    // 名称
    name: string;
    // 编码
    code: string;
    // 是否应用编码规则
    isCodeRule: string;
    // 版次号
    issueCode: string;
    // 备注
    remark: string;
    // 参数清单
    paramList: 设备数采方案参数关联信息编辑DTO[];
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
