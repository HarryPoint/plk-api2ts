import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/深蓝大屏报表/getShenLanZhuanTaReportUsingGET
*/
export default function fetchMethod(options: { data: IQueryConditionsOfTheDarkBlueReport, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTurretOrUnit1To7Report>(
        {
            url: "/masterdata-service/shenLan/report/zhuanTa",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** 深蓝报表查询条件 */
export interface IQueryConditionsOfTheDarkBlueReport {
    /** 日期 */
    date?;
    /** 当前页面 */
    pageNo?: number;
    /** 当前执行的程序名称 */
    currentProgramName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 设备名称 */
    deviceName?: string;
    /** 报警信息 */
    warnInfo?: string;
    /** 运行模式 */
    runMode?: string;
    /** 当前刀具 */
    currentKnife?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«转塔或者1到7号机报表»» */
export interface IJSONResultListTurretOrUnit1To7Report {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITurretOrEngine1Through7Report[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 转塔或者1到7号机报表 */
export interface ITurretOrEngine1Through7Report {
    /** 日期 */
    date?;
    /** 设备名称 */
    deviceName?: string;
    /** 加工数量 */
    produceQty?: number;
    /** 操作模式 */
    operateMode?: string;
    /** 运行模式 */
    runMode?: string;
    /** 当前刀具 */
    currentKnife?: string;
    /** 进给倍率 */
    feedMultiply?: string;
    /** 进给速度 */
    feedSpeed?: string;
    /** 报警信息 */
    warnInfo?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
