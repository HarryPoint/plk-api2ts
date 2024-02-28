import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/深蓝大屏相关/getSettingInfoUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultDeepBlueProductionScreenSettingReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lsShenLanSetting/getSettingInfo",
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDeepBlueProductionLargeScreenSettingsReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 深蓝生产大屏设置返回VO */
export interface IDeepBlueProductionLargeScreenSettingsReturnToVO {
    /** 大屏左侧质检合格率工序id */
    leftQualityPassRatioProcessId?: string;
    /** 大屏左侧质检数据 */
    leftQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetBackToVO;
    /** 大屏右侧质检合格率工序id */
    rightQualityPassRatioProcessId?: string;
    /** 大屏右侧质检数据 */
    rightQualityPassRatios?: IDeepBlueProductionLargeScreenPassRateDataSetBackToVO;
    /** 大屏中部数据类型 */
    centerProductionType?: EDeepBlueProductionLargeScreenSettingsReturnToVO_centerProductionType;
    /** 大屏中部业务对象集 */
    centerBusinessList?: IDeepBlueProductionLargeScreenOutputSettingsReturnToVO[];
    /** 每日清零时间 */
    everydayResetTime?: ILocalTime;
}
/** 深蓝生产大屏合格率数据设置返回VO */
export interface IDeepBlueProductionLargeScreenPassRateDataSetBackToVO {
    /** 今日总产量 - 手动修改值 */
    dayTotalQuantity?: number;
    /** 今日合格产量 - 手动修改值 */
    dayProduceQuantity?: number;
    /** 过去12个月总产量 - 手动修改值 */
    monthTotalQuantity?: number;
    /** 过去12个月合格产量 - 手动修改值 */
    monthProduceQuantity?: number;
    /** 过去10年总产量 - 手动修改值 */
    yearTotalQuantity?: number;
    /** 过去10年合格产量 - 手动修改值 */
    yearProduceQuantity?: number;
}
/** 深蓝生产大屏产出设置返回VO */
export interface IDeepBlueProductionLargeScreenOutputSettingsReturnToVO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 版次号 */
    issueCode?: string;
    /** 过去12个月明细 */
    month12Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO[];
    /** 过去10年明细 */
    year10Details?: IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO[];
}
/** 深蓝生产大屏产出设置明细返回VO */
export interface IDeepBlueProductionLargeScreenOutputSettingDetailsBackToVO {
    /** 日期 */
    scheduleDate?: number;
    /** 手动修改值 */
    handQuantity?: number;
    /** 手动修改金额 */
    handAmount?: number;
}
/** LocalTime */
export interface ILocalTime {
    /** undefined */
    hour?: number;
    /** undefined */
    minute?: number;
    /** undefined */
    second?: number;
    /** undefined */
    nano?: number;
}

export enum EDeepBlueProductionLargeScreenSettingsReturnToVO_centerProductionType {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料分组 */
    MATERIAL_GROUP = "MATERIAL_GROUP"
}
