// JSONResult«设备数采方案明细返回VO»
export interface IJSONResult设备数采方案明细返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备数采方案明细返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采方案明细返回VO
export interface I设备数采方案明细返回VO {
    // id
    id: number;
    // 方案名称
    name: string;
    // 方案编号
    code: string;
    // 版次号
    issueCode: string;
    // 设备集合
    deviceList: IIdNameNumberVO[];
    // 参数项
    paramList: I设备数采方案参数关联信息返回VO[];
    // 备注
    remark: string;
    // 状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
// 设备数采方案参数关联信息返回VO
export interface I设备数采方案参数关联信息返回VO {
    // 关联id
    id: number;
    // 设备数采方案id
    deviceCollectionPlanId: number;
    // 设备数采参数id
    deviceCollectionParamId: number;
    // 设备数采参数名称
    deviceCollectionParamName: string;
    // 设备数采参数编号
    deviceCollectionParamCode: string;
    // 设备数采参数数据类型
    deviceCollectionParamDataType: string;
    // 设备数采参数单位
    deviceCollectionParamUnit: string;
    // 实时数值对比标准
    numberStandard: string;
    // 实时数值对比标准描述
    numberStandardDesc: string;
    // 实时比较数值
    compareNumber: number;
    // 实时下限
    lowerLimit: number;
    // 实时上限
    upperLimit: number;
    // 备注
    remark: string;
    // 统计类型
    statisticType: string;
    // 统计类型描述
    statisticTypeDesc: string;
    // 统计范围配置项集
    limits: I设备数采方案参数预警返回VO[];
}
// 设备数采方案参数预警返回VO
export interface I设备数采方案参数预警返回VO {
    // 预警id
    id: number;
    // 时间粒度
    timeType: string;
    // 数值对比标准
    numberStandard: string;
    // 数值对比标准描述
    numberStandardDesc: string;
    // 比较数值
    compareNumber: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 备注
    remark: string;
    // 数据预警说明
    standardDesc: string;
}
