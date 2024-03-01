import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏相关/getSettingInfoUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultDeepBlueProductionScreenSettingReturnsVO>(
        {
            url: "/masterdata-service/lsShenLanSetting/getSettingInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«深蓝生产大屏设置返回VO» */
export interface IJSONResultDeepBlueProductionScreenSettingReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDeepBlueProductionLargeScreenSettingsReturnToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 深蓝生产大屏设置返回VO */
export interface IDeepBlueProductionLargeScreenSettingsReturnToVO {
    /** 大屏中部业务对象集 */
    centerBusinessList?: IDeepBlueProductionLargeScreenOutputSettingsReturnToVO[];
    /** 大屏中部数据类型 */
    centerProductionType?: EDeepBlueProductionLargeScreenSettingsReturnToVO_centerProductionType;
    /** 每日清零时间 */
    everydayResetTime?: ILocalTime;
    /** 大屏左侧质检合格率工序id */
    leftQualityPassRatioProcessId?: string;
    /** 大屏左侧质检数据 */
    leftQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetBackToVO;
    /** 大屏右侧质检合格率工序id */
    rightQualityPassRatioProcessId?: string;
    /** 大屏右侧质检数据 */
    rightQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetBackToVO;
}
/** 深蓝生产大屏产出设置返回VO */
export interface IDeepBlueProductionLargeScreenOutputSettingsReturnToVO {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 过去12个月明细 */
    month12Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO[];
    /** 名称 */
    name?: string;
    /** 过去10年明细 */
    year10Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO[];
}
/** 深蓝生产大屏产出设置明细返回VO */
export interface IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO {
    /** 手动修改金额 */
    handAmount?: number;
    /** 手动修改值 */
    handQuantity?: number;
    /** 日期 */
    scheduleDate?: number;
}
/** LocalTime */
export interface ILocalTime {
    /** undefined */
    hour?: number;
    /** undefined */
    minute?: number;
    /** undefined */
    nano?: number;
    /** undefined */
    second?: number;
}
/** 深蓝生产大屏合格率数据设置返回VO */
export interface IDeepBlueProductionLargeScreenPassRateDataSetBackToVO {
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

export enum EDeepBlueProductionLargeScreenSettingsReturnToVO_centerProductionType {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料分组 */
    MATERIAL_GROUP = "MATERIAL_GROUP"
}
