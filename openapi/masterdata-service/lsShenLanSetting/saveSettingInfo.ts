import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏相关/saveSettingInfoUsingPOST_1
*/
export default function fetchMethod(options: { data: IDarkBlueLargeScreenSetsTheDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/lsShenLanSetting/saveSettingInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 深蓝大屏设置DTO */
export interface IDarkBlueLargeScreenSetsTheDTO {
    /** 大屏中部业务对象集 */
    centerBusinessList?: IDeepBlueProductionLargeScreenOutputSettingsEditDTO[];
    /** 大屏中部数据类型 */
    centerProductionType?: EDarkBlueLargeScreenSetsTheDTO_centerProductionType;
    /** 每日清零时间 HH:mm */
    everydayResetTime?: string;
    /** 大屏左侧质检合格率工序id */
    leftQualityPassRatioProcessId?: string;
    /** 大屏左侧质检数据 */
    leftQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetEditDTO;
    /** 大屏右侧质检合格率工序id */
    rightQualityPassRatioProcessId?: string;
    /** 大屏右侧质检数据 */
    rightQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetEditDTO;
}
/** 深蓝生产大屏产出设置编辑DTO */
export interface IDeepBlueProductionLargeScreenOutputSettingsEditDTO {
    /** id */
    id?: string;
    /** 物料分组编码 */
    materialGroupCode?: string;
    /** 过去12个月明细 */
    month12Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsEditDTO[];
    /** 过去10年明细 */
    year10Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsEditDTO[];
}
/** 深蓝生产大屏产出设置明细编辑DTO */
export interface IDeepBlueProductionLargeScreenOutputSettingDetailsEditDTO {
    /** 手动修改金额 */
    handAmount?: number;
    /** 手动修改值 */
    handQuantity?: number;
    /** 日期 - 过去12个月格式传 yyyy-MM  过去10年格式传 yyyy */
    scheduleDate?: string;
}
/** 深蓝生产大屏合格率数据设置编辑DTO */
export interface IDeepBlueProductionLargeScreenPassRateDataSetEditDTO {
    /** 今日合格产量 - 手动修改值 */
    dayProduceQuantity?: number;
    /** 今日总产量 - 手动修改值 */
    dayTotalQuantity?: number;
    /** 过去12个月合格产量 - 手动修改值 */
    monthProduceQuantity?: number;
    /** 过去12个月总产量 - 手动修改值 */
    monthTotalQuantity?: number;
    /** 过去10年合格产量 - 手动修改值 */
    yearProduceQuantity?: number;
    /** 过去10年总产量 - 手动修改值 */
    yearTotalQuantity?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EDarkBlueLargeScreenSetsTheDTO_centerProductionType {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料分组 */
    MATERIAL_GROUP = "MATERIAL_GROUP"
}
