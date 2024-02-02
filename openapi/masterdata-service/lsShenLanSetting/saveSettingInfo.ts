// 深蓝大屏设置DTO
export interface I深蓝大屏设置DTO {
    // 大屏左侧质检合格率工序id
    leftQualityPassRatioProcessId: number;
    // 大屏左侧质检数据
    leftQualityPassRatios: I深蓝生产大屏合格率数据设置编辑DTO;
    // 大屏右侧质检合格率工序id
    rightQualityPassRatioProcessId: number;
    // 大屏右侧质检数据
    rightQualityPassRatios: I深蓝生产大屏合格率数据设置编辑DTO;
    // 大屏中部数据类型
    centerProductionType: string;
    // 大屏中部业务对象集
    centerBusinessList: I深蓝生产大屏产出设置编辑DTO[];
    // 每日清零时间 HH:mm
    everydayResetTime: string;
}
// 深蓝生产大屏合格率数据设置编辑DTO
export interface I深蓝生产大屏合格率数据设置编辑DTO {
    // 今日总产量 - 手动修改值
    dayTotalQuantity: number;
    // 今日合格产量 - 手动修改值
    dayProduceQuantity: number;
    // 过去12个月总产量 - 手动修改值
    monthTotalQuantity: number;
    // 过去12个月合格产量 - 手动修改值
    monthProduceQuantity: number;
    // 过去10年总产量 - 手动修改值
    yearTotalQuantity: number;
    // 过去10年合格产量 - 手动修改值
    yearProduceQuantity: number;
}
// 深蓝生产大屏产出设置编辑DTO
export interface I深蓝生产大屏产出设置编辑DTO {
    // id
    id: number;
    // 物料分组编码
    materialGroupCode: string;
    // 过去12个月明细
    month12Details: I深蓝生产大屏产出设置明细编辑DTO[];
    // 过去10年明细
    year10Details: I深蓝生产大屏产出设置明细编辑DTO[];
}
// 深蓝生产大屏产出设置明细编辑DTO
export interface I深蓝生产大屏产出设置明细编辑DTO {
    // 日期 - 过去12个月格式传 yyyy-MM  过去10年格式传 yyyy
    scheduleDate: string;
    // 手动修改值
    handQuantity: number;
    // 手动修改金额
    handAmount: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
