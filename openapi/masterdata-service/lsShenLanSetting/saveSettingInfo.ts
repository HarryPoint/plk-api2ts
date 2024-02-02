// 深蓝大屏设置DTO
export interface I深蓝大屏设置DTO {
    // 大屏左侧质检合格率工序id
    leftQualityPassRatioProcessId: number;
    // 大屏左侧质检数据
    leftQualityPassRatios: 深蓝生产大屏合格率数据设置编辑DTO;
    // 大屏右侧质检合格率工序id
    rightQualityPassRatioProcessId: number;
    // 大屏右侧质检数据
    rightQualityPassRatios: 深蓝生产大屏合格率数据设置编辑DTO;
    // 大屏中部数据类型
    centerProductionType: string;
    // 大屏中部业务对象集
    centerBusinessList: 深蓝生产大屏产出设置编辑DTO[];
    // 每日清零时间 HH:mm
    everydayResetTime: string;
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
