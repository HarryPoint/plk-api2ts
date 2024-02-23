import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/设备数采数据方案参数关联相关/getParamDetailByDeviceIdUsingGET
export default function fetchMethod(params: { deviceId: number }) {
    return http<IJSONResultListDeviceDataCollectionSchemeParameterAssociationInformationIsReturnedToVO>({
        url: "/app-mobile-web/api/app/mobile/deviceCollectionPlanParam/getParamDetailByDeviceId",
        method: "get",
        params,
    });
}
// JSONResult«List«设备数采方案参数关联信息返回VO»»
export interface IJSONResultListDeviceDataCollectionSchemeParameterAssociationInformationIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采方案参数关联信息返回VO
export interface IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO {
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
    limits: IDeviceDataAcquisitionSchemeParameterWarningReturnVO[];
}
// 设备数采方案参数预警返回VO
export interface IDeviceDataAcquisitionSchemeParameterWarningReturnVO {
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
