import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16700/doc.html#/default/盼盼大屏相关/getSettingInfoUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultPanpanProductionLargeScreenSettingsResponseDTO>(
        {
            url: "/masterdata-service/lsPanPanSetting/getSettingInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«盼盼生产大屏设置响应DTO» */
export interface IJSONResultPanpanProductionLargeScreenSettingsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPanpanProductionLargeScreenSettingsResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 盼盼生产大屏设置响应DTO */
export interface IPanpanProductionLargeScreenSettingsResponseDTO {
    /** 延期订单判断值（小时） */
    overdueTime?: number;
    /** 大屏展示工序id集 */
    processIds?: IIdNameNumberVO[];
    /** 延期订单判断类型 */
    produceOrderOverdueType?: EPanpanProductionLargeScreenSettingsResponseDTO_produceOrderOverdueType;
    /** 开始时间月份类型 */
    monthBeginType?: EPanpanProductionLargeScreenSettingsResponseDTO_monthBeginType;
    /** 开始时间月份日期 */
    monthBeginDay?: number;
    /** 结束时间月份日期 */
    monthEndDay?: number;
    /** 大屏中上 - 本月计划数量 */
    thisMonthPlanQuantity?: number;
    /** 大屏左上 - 当日生产概览 - 各工序当日完工情况表 产出数 取值逻辑类型 */
    panPanProduceOrderCompleteType?: EPanpanProductionLargeScreenSettingsResponseDTO_panPanProduceOrderCompleteType;
    /** 大屏中上 - 本月累计订单量 */
    thisMonthOrderCount?: number;
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

export enum EPanpanProductionLargeScreenSettingsResponseDTO_produceOrderOverdueType {
    /** 计划完工日期 */
    PLAN_END_TIME = "PLAN_END_TIME",
    /** 理论完工日期 */
    THEORETIC_END_TIME = "THEORETIC_END_TIME"
}

export enum EPanpanProductionLargeScreenSettingsResponseDTO_monthBeginType {
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    CURRENT_MONTH = "CURRENT_MONTH"
}

export enum EPanpanProductionLargeScreenSettingsResponseDTO_panPanProduceOrderCompleteType {
    /** 实际出料数量 */
    ACTUAL_MOVE_OUT_QUANTITY = "ACTUAL_MOVE_OUT_QUANTITY",
    /** 计划订单出料数量 */
    PLAN_ORDER_MOVE_OUT_QUANTITY = "PLAN_ORDER_MOVE_OUT_QUANTITY"
}
