// 销售交期应答辅助计算DTO
export interface I销售交期应答辅助计算DTO {
    // 物料id
    materialId: number;
    // 生产工艺路径id
    routingId: number;
    // 数量, 只能输入正数，可以有小数点，小数点后2位
    count: number;
    // 排产开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    beginTime: string;
    // 是否优先级最高
    isHighest: string;
    // 设计开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    designBeginTime: string;
    // 设计结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    designEndTime: string;
    // 采购开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    purchaseBeginTime: string;
    // 采购结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    purchaseEndTime: string;
}
// JSONResult«销售交期应答辅助返回VO»
export interface IJSONResult销售交期应答辅助返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 销售交期应答辅助返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
