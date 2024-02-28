import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16700/doc.html#/default/盼盼大屏相关/saveSettingInfoUsingPOST
*/
export default function fetchMethod(options: { data: IPanpanLargeScreenSetDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/lsPanPanSetting/saveSettingInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盼盼大屏设置DTO */
export interface IPanpanLargeScreenSetDTO {
    /** 延期订单判断值（小时） */
    overdueTime?: number;
    /** 大屏展示工序id集 */
    processIds?: string[];
    /** 延期订单判断类型 */
    produceOrderOverdueType?: EPanpanLargeScreenSetDTO_produceOrderOverdueType;
    /** 开始时间月份类型 */
    monthBeginType?: EPanpanLargeScreenSetDTO_monthBeginType;
    /** 开始时间月份日期 */
    monthBeginDay?: number;
    /** 结束时间月份日期 */
    monthEndDay?: number;
    /** 大屏中上 - 本月计划数量 */
    thisMonthPlanQuantity?: number;
    /** 大屏左上 - 当日生产概览 - 各工序当日完工情况表 产出数 取值逻辑类型 */
    panPanProduceOrderCompleteType?: EPanpanLargeScreenSetDTO_panPanProduceOrderCompleteType;
    /** 大屏中上 - 本月累计订单量 */
    thisMonthOrderCount?: number;
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
    ts?: string;
}

export enum EPanpanLargeScreenSetDTO_produceOrderOverdueType {
    /** 计划完工日期 */
    PLAN_END_TIME = "PLAN_END_TIME",
    /** 理论完工日期 */
    THEORETIC_END_TIME = "THEORETIC_END_TIME"
}

export enum EPanpanLargeScreenSetDTO_monthBeginType {
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    CURRENT_MONTH = "CURRENT_MONTH"
}

export enum EPanpanLargeScreenSetDTO_panPanProduceOrderCompleteType {
    /** 实际出料数量 */
    ACTUAL_MOVE_OUT_QUANTITY = "ACTUAL_MOVE_OUT_QUANTITY",
    /** 计划订单出料数量 */
    PLAN_ORDER_MOVE_OUT_QUANTITY = "PLAN_ORDER_MOVE_OUT_QUANTITY"
}
