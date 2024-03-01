import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏报表/getShenLanZhuanTaReportUsingGET
*/
export default function fetchMethod(options: { data: IQueryConditionsOfTheDarkBlueReport, params: { EnterpriseId?: string } }, extraOptions?: any) {
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
    /** 当前刀具 */
    currentKnife?: string;
    /** 当前执行的程序名称 */
    currentProgramName?: string;
    /** 日期 */
    date?;
    /** 设备名称 */
    deviceName?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 运行模式 */
    runMode?: string;
    /** 报警信息 */
    warnInfo?: string;
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
    /** 响应结果 */
    data?: ITurretOrEngine1Through7Report[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 转塔或者1到7号机报表 */
export interface ITurretOrEngine1Through7Report {
    /** 当前刀具 */
    currentKnife?: string;
    /** 日期 */
    date?;
    /** 设备名称 */
    deviceName?: string;
    /** 进给倍率 */
    feedMultiply?: string;
    /** 进给速度 */
    feedSpeed?: string;
    /** 操作模式 */
    operateMode?: string;
    /** 加工数量 */
    produceQty?: number;
    /** 运行模式 */
    runMode?: string;
    /** 报警信息 */
    warnInfo?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
