import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据方案参数关联相关/getParamDetailByDeviceIdUsingGET
*/
export default function fetchMethod(options: { params: { deviceId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListDeviceDataCollectionSchemeParameterAssociationInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/deviceCollectionPlanParam/getParamDetailByDeviceId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«设备数采方案参数关联信息返回VO»» */
export interface IJSONResultListDeviceDataCollectionSchemeParameterAssociationInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采方案参数关联信息返回VO */
export interface IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO {
    /** 实时比较数值 */
    compareNumber?: number;
    /** 设备数采参数编号 */
    deviceCollectionParamCode?: string;
    /** 设备数采参数数据类型 */
    deviceCollectionParamDataType?: string;
    /** 设备数采参数id */
    deviceCollectionParamId?: string;
    /** 设备数采参数名称 */
    deviceCollectionParamName?: string;
    /** 设备数采参数单位 */
    deviceCollectionParamUnit?: string;
    /** 设备数采方案id */
    deviceCollectionPlanId?: string;
    /** 关联id */
    id?: string;
    /** 统计范围配置项集 */
    limits?: IDeviceDataAcquisitionSchemeParameterWarningReturnVO[];
    /** 实时下限 */
    lowerLimit?: number;
    /** 实时数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_numberStandard;
    /** 实时数值对比标准描述 */
    numberStandardDesc?: string;
    /** 备注 */
    remark?: string;
    /** 统计类型 */
    statisticType?: EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_statisticType;
    /** 统计类型描述 */
    statisticTypeDesc?: string;
    /** 实时上限 */
    upperLimit?: number;
}
/** 设备数采方案参数预警返回VO */
export interface IDeviceDataAcquisitionSchemeParameterWarningReturnVO {
    /** 比较数值 */
    compareNumber?: number;
    /** 预警id */
    id?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterWarningReturnVO_numberStandard;
    /** 数值对比标准描述 */
    numberStandardDesc?: string;
    /** 备注 */
    remark?: string;
    /** 数据预警说明 */
    standardDesc?: string;
    /** 时间粒度 */
    timeType?: EDeviceDataAcquisitionSchemeParameterWarningReturnVO_timeType;
    /** 上限 */
    upperLimit?: number;
}

export enum EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_numberStandard {
    /** 数值区间 */
    BETWEEN = "BETWEEN",
    /** 数值大于 */
    GT = "GT",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值小于 */
    LT = "LT",
    /** 数值小于等于 */
    LE = "LE"
}

export enum EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_statisticType {
    /** 平均值 */
    AVG = "AVG",
    /** 求和 */
    SUM = "SUM",
    /** 最大值 */
    MAX = "MAX",
    /** 最小值 */
    MIN = "MIN",
    /** 取前后数据差值 */
    SUBTRACT = "SUBTRACT"
}

export enum EDeviceDataAcquisitionSchemeParameterWarningReturnVO_numberStandard {
    /** 数值区间 */
    BETWEEN = "BETWEEN",
    /** 数值大于 */
    GT = "GT",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值小于 */
    LT = "LT",
    /** 数值小于等于 */
    LE = "LE"
}

export enum EDeviceDataAcquisitionSchemeParameterWarningReturnVO_timeType {
    /** 全部 */
    ALL = "ALL",
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH"
}
