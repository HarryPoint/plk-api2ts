// JSONResult«List«基础VO»»
export interface IJSONResultList基础VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I基础VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 基础VO
export interface I基础VO {
    // id
    id: number;
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建部门id
    createDeptId: number;
    // 创建时间
    createTime: string;
    // 修改账户id
    updateUserId: number;
    // 修改部门id
    updateDeptId: number;
    // 更新时间
    updateTime: string;
    // 企业id
    enterpriseId: number;
    // 所属区域id
    areaId: number;
    // 工序名称
    name: string;
    // 工序编号
    code: string;
    // 准备时间
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 生产时间
    produceTime: number;
    // 生产时间单位
    produceTimeUnit: string;
    // 产出数量
    produceQuantity: number;
    // 准备工费（元）
    readyPrice: number;
    // 合格产出工费（元）
    producePrice: number;
    // 返工产出工费（元）
    backProducePrice: number;
}