// 编辑设备数采方案 DTO
export interface IEditDeviceDataAcquisitionSchemeDTO {
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
    paramList: IDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO[];
}
// 设备数采方案参数关联信息编辑DTO
export interface IDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO {
    // 关联id
    id: number;
    // 设备数采参数id
    deviceCollectionParamId: number;
    // 统计类型
    statisticType: string;
    // 实时数值对比标准
    numberStandard: string;
    // 实时比较数值
    compareNumber: number;
    // 实时下限
    lowerLimit: number;
    // 实时上限
    upperLimit: number;
    // 实时备注
    remark: string;
    // 统计范围配置项集
    limits: IDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO[];
}
// 设备数采方案参数预警编辑DTO
export interface IDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO {
    // 关联id
    id: number;
    // 时间粒度
    timeType: string;
    // 数值对比标准
    numberStandard: string;
    // 比较数值
    compareNumber: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
