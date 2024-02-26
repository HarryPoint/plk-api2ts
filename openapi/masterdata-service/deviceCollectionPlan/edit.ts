import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备数采数据方案相关/editUsingPOST_4
*/
export default function fetchMethod(options: { data: IEditDeviceDataAcquisitionSchemeDTOparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceCollectionPlan/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑设备数采方案 DTO */
export interface IEditDeviceDataAcquisitionSchemeDTO {
    /** id，如果不传就是新增 */
    id?: number;
    /** 名称 */
    name: string;
    /** 编码 */
    code?: string;
    /** 是否应用编码规则 */
    isCodeRule: EEditDeviceDataAcquisitionSchemeDTO_isCodeRule;
    /** 版次号 */
    issueCode?: string;
    /** 备注 */
    remark?: string;
    /** 参数清单 */
    paramList?: IDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO[];
}
/** 设备数采方案参数关联信息编辑DTO */
export interface IDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO {
    /** 关联id */
    id?: number;
    /** 设备数采参数id */
    deviceCollectionParamId?: number;
    /** 统计类型 */
    statisticType?: EDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO_statisticType;
    /** 实时数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO_numberStandard;
    /** 实时比较数值 */
    compareNumber?: number;
    /** 实时下限 */
    lowerLimit?: number;
    /** 实时上限 */
    upperLimit?: number;
    /** 实时备注 */
    remark?: string;
    /** 统计范围配置项集 */
    limits?: IDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO[];
}
/** 设备数采方案参数预警编辑DTO */
export interface IDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO {
    /** 关联id */
    id?: number;
    /** 时间粒度 */
    timeType?: EDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO_timeType;
    /** 数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO_numberStandard;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 备注 */
    remark?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EEditDeviceDataAcquisitionSchemeDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO_statisticType {
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

export enum EDeviceDataAcquisitionSchemeParameterAssociationInformationEditDTO_numberStandard {
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

export enum EDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO_timeType {
    /** 全部 */
    ALL = "ALL",
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH"
}

export enum EDeviceDataAcquisitionSchemeParameterEarlyWarningEditDTO_numberStandard {
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
