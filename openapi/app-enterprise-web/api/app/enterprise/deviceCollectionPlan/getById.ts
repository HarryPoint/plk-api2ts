import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采数据方案相关/getByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultTheDeviceDataCollectionSchemeDetailsAreReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollectionPlan/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«设备数采方案明细返回VO» */
export interface IJSONResultTheDeviceDataCollectionSchemeDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDeviceDataCollectionSchemeDetailsAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采方案明细返回VO */
export interface IDeviceDataCollectionSchemeDetailsAreReturnedToVO {
    /** id */
    id?: string;
    /** 方案名称 */
    name?: string;
    /** 方案编号 */
    code?: string;
    /** 版次号 */
    issueCode?: string;
    /** 设备集合 */
    deviceList?: IIdNameNumberVO[];
    /** 参数项 */
    paramList?: IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO[];
    /** 备注 */
    remark?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** 设备数采方案参数关联信息返回VO */
export interface IDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO {
    /** 关联id */
    id?: string;
    /** 设备数采方案id */
    deviceCollectionPlanId?: string;
    /** 设备数采参数id */
    deviceCollectionParamId?: string;
    /** 设备数采参数名称 */
    deviceCollectionParamName?: string;
    /** 设备数采参数编号 */
    deviceCollectionParamCode?: string;
    /** 设备数采参数数据类型 */
    deviceCollectionParamDataType?: string;
    /** 设备数采参数单位 */
    deviceCollectionParamUnit?: string;
    /** 实时数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_numberStandard;
    /** 实时数值对比标准描述 */
    numberStandardDesc?: string;
    /** 实时比较数值 */
    compareNumber?: number;
    /** 实时下限 */
    lowerLimit?: number;
    /** 实时上限 */
    upperLimit?: number;
    /** 备注 */
    remark?: string;
    /** 统计类型 */
    statisticType?: EDeviceDataAcquisitionSchemeParameterAssociationInformationIsReturnedToVO_statisticType;
    /** 统计类型描述 */
    statisticTypeDesc?: string;
    /** 统计范围配置项集 */
    limits?: IDeviceDataAcquisitionSchemeParameterWarningReturnVO[];
}
/** 设备数采方案参数预警返回VO */
export interface IDeviceDataAcquisitionSchemeParameterWarningReturnVO {
    /** 预警id */
    id?: string;
    /** 时间粒度 */
    timeType?: EDeviceDataAcquisitionSchemeParameterWarningReturnVO_timeType;
    /** 数值对比标准 */
    numberStandard?: EDeviceDataAcquisitionSchemeParameterWarningReturnVO_numberStandard;
    /** 数值对比标准描述 */
    numberStandardDesc?: string;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 备注 */
    remark?: string;
    /** 数据预警说明 */
    standardDesc?: string;
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
