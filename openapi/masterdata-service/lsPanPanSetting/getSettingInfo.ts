// http://47.108.139.107:16700/doc.html#/default/盼盼大屏相关/getSettingInfoUsingGET
// JSONResult«盼盼生产大屏设置响应DTO»
export interface IJSONResultPanpanProductionLargeScreenSettingsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPanpanProductionLargeScreenSettingsResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 盼盼生产大屏设置响应DTO
export interface IPanpanProductionLargeScreenSettingsResponseDTO {
    // 延期订单判断值（小时）
    overdueTime: number;
    // 大屏展示工序id集
    processIds: IIdNameNumberVO[];
    // 延期订单判断类型
    produceOrderOverdueType: string;
    // 开始时间月份类型
    monthBeginType: string;
    // 开始时间月份日期
    monthBeginDay: number;
    // 结束时间月份日期
    monthEndDay: number;
    // 大屏中上 - 本月计划数量
    thisMonthPlanQuantity: number;
    // 大屏左上 - 当日生产概览 - 各工序当日完工情况表 产出数 取值逻辑类型
    panPanProduceOrderCompleteType: string;
    // 大屏中上 - 本月累计订单量
    thisMonthOrderCount: number;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
